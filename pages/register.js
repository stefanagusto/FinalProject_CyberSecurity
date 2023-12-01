// pages/register.js
import React from "react";
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";

const Register = () => {

  const router = useRouter();

  const handleSignUp = (event) => {
    event.preventDefault();

    // Perform registration logic here

    // Show alert to inform the user
    alert('Account successfully created! Please log in.');

    // Redirect to the login page
    router.push('/login');
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="mb-4 text-3xl font-bold text-center text-blue-600">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-black"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
