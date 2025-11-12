import { useState } from "react";
import { User, Mail } from "lucide-react";
import FormInput from "./FormInput";

function ResetPasswordForm() {
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.email.trim()) {
      setMessage("Please fill in all fields!");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Invalid email format!");
      setStatus("error");
      return;
    }

    setMessage("Reset link sent to your email!");
    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <FormInput
        type="text"
        title="Username"
        icon={<User size={18} />}
        name="username"
        onChange={handleChange}
      />
      <FormInput
        type="email"
        title="Email"
        icon={<Mail size={18} />}
        name="email"
        onChange={handleChange}
      />

      {message && (
        <div
          className={`text-sm text-left p-2 rounded-md transition-all duration-300 ${
            status === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-md shadow hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
