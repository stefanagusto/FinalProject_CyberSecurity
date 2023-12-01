// pages/login.js
import React from "react";
import "tailwindcss/tailwind.css";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="mb-4 text-3xl font-bold text-center text-blue-600">
          Login
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 text-black border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 text-black border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 mb-8 text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-blue-500 hover:text-blue-800 "
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
