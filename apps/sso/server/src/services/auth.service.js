import { User } from "../models/user.model.js";
import { AppError } from "@shared/utils/AppError";

export const authService = {
  async login({ username, password }) {
    const user = await User.findOne({ username });

    if (!user || !user.isActive) {
      throw new AppError('Invalid credentials', 401);
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      user.failedLoginCount += 1;
      if (user.failedLoginCount >= 3) {
        user.isActive = false;
        await user.save();
        throw new AppError('Too many failed attempts. Account locked', 423);
      }
      await user.save();
      const remainingAttempts = 3 - user.failedLoginCount;
      throw new AppError(`Wrong password. ${remainingAttempts} attempts remaining.`, 401);
    }
    
    if (!user.isActive) {
      throw new AppError('Account locked. Please reset your password.', 403);
    }

    if (user.failedLoginCount > 0) {
      user.failedLoginCount = 0;
      await user.save();
    }

    const userData = user.toObject();
    delete userData.password;
    delete userData.failedLoginCount;

    return { user: userData };
  },
  
  async changePassword({ username, currentPassword, newPassword }) {
    // Implementation for password change
  },
  
  async resetPassword({ email }) {
    // Implementation for password reset
  }
};
