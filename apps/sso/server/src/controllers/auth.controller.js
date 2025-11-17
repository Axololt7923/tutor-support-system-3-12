import { asyncHandler } from "@shared/utils/asyncHandler";
import { authService } from "../services/auth.service.js";
import { AppError } from "@shared/utils/AppError";

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const { user } = await authService.login({ username, password });
  
  req.session.user = {
    id: user._id.toString(),
    username: user.username,
    role: user.role
  };
  
  await req.session.save();

  res.status(200).json({success: true, data: {user}});
});

export const changePassword = asyncHandler(async (req, res) => {
  // YOUR CODE HERE
});

export const resetPassword = asyncHandler(async (req, res) => {
  // YOUR CODE HERE
});

export const logout = asyncHandler(async (req, res) => {
  await req.session.destroy();
  res.clearCookie('connect.sid', { 
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  
  res.status(200).json({success: true, message: 'Successfully logged out'});
});
