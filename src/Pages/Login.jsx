import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp, user, logout, login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;

    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient from-indigo-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {mode === "signup" ? "Create Account" : "Welcome Back"}
          </h1>

          {user && (
            <div className="mt-3 bg-green-50 text-green-700 text-sm px-3 py-2 rounded-lg">
              Logged in as: <span className="font-medium">{user.email}</span>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Global Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
                ${errors.email 
                  ? "border-red-400 focus:ring-red-300" 
                  : "focus:ring-fuchsia-400"}`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
                ${errors.password 
                  ? "border-red-400 focus:ring-red-300" 
                  : "focus:ring-fuchsia-400"}`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Max 12 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md active:scale-[0.98]"
          >
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600 space-y-3">
          
          {/* Switch Mode */}
          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-indigo-600 cursor-pointer hover:underline font-medium"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-indigo-600 cursor-pointer hover:underline font-medium"
              >
                Sign Up
              </span>
            </p>
          )}

          {/* Logout Button */}
          {user && (
            <button
              onClick={logout}
              className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}