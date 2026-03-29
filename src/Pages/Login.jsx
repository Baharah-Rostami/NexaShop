import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp, login } = useContext(AuthContext);

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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {mode === "signup" ? "Create Account" : "Welcome Back"}
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Global Error */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-300 text-sm px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
                ${errors.email
                  ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-fuchsia-400 dark:focus:ring-fuchsia-500"
                } bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-red-500 dark:text-red-400 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition
                ${errors.password
                  ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-fuchsia-400 dark:focus:ring-fuchsia-500"
                } bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400`}
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
              <span className="text-red-500 dark:text-red-400 text-sm mt-1 block">
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

        <div className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300 space-y-3">

          {/* Switch Mode */}
          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline font-medium"
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline font-medium"
              >
                Sign Up
              </button>
            </p>
          )}

        </div>
      </div>
    </div>
  );
}