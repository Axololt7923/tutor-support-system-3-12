import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleChangePassword = () => navigate("/change-password");

  return (
    <form
      id="fm1"
      method="post"
      action="#"
      onSubmit={(e) => e.preventDefault()}
      className="bg-[#f5f5f5] p-4 sm:p-5 border border-[#ddd] rounded-sm"
    >
      <h2 className="text-[#990033] text-lg font-bold mb-0">Enter your Username and Password</h2>
      <div className="mb-2 pb-2 border-b border-[#ddd] text-sm text-[#444]"></div>

      {/* Username */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-[#333] font-semibold mb-1">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          className="w-[292px] border border-[#ccc] rounded-sm px-2 py-1.5 bg-[#ffffdd] focus:outline-none focus:ring-1 focus:ring-[#aaa]"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-[#333] font-semibold mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-[292px] border border-[#ccc] rounded-sm px-2 py-1.5 bg-[#ffffdd] focus:outline-none focus:ring-1 focus:ring-[#aaa]"
        />
      </div>

      <div className="mb-4 pb-2 border-b border-[#ddd] text-sm text-[#444]">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span>Warn me before logging me into other sites.</span>
        </label>
      </div>

      {/* Nút Login và Clear */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          type="submit"
          className="bg-[#0066cc] hover:bg-[#004c99] text-white text-sm px-4 py-1.5 rounded-sm font-medium border border-[#004c99]"
        >
          Login
        </button>
        <button
          type="reset"
          className="bg-[#0066cc] hover:bg-[#004c99] text-white text-sm px-4 py-1.5 rounded-sm font-medium border border-[#004c99]"
        >
          Clear
        </button>
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={handleChangePassword}
          className="text-[#210f7a] underline text-sm bg-transparent border-0 p-0 cursor-pointer"
        >
          Change password?
        </button>
      </div>
    </form>
  );
}
