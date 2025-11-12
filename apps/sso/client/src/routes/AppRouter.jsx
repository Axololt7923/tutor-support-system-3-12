import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoginPage from "../pages/AuthPage/LoginPage";
import ChangePasswordPage from "../pages/AuthPage/ChangePasswordPage";
import ResetPasswordPage from "../pages/AuthPage/ResetPasswordPage";

export default function AppRouter() {
  const location = useLocation();

  // 🎯 Tự động cập nhật tiêu đề mỗi khi đổi route
  useEffect(() => {
    const pathTitleMap = {
      "/login": "Login | Tutor Support System",
      "/change-password": "Change Password | Tutor Support System",
      "/reset-password": "Reset Password | Tutor Support System",
    };

    document.title = pathTitleMap[location.pathname] || "Tutor Support System";
  }, [location]);

  console.log("AppRouter rendered");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
}
