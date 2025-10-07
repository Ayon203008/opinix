"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image: e.target.image.value,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message); // error message
      } else {
        alert(result.message); // success message
        e.target.reset(); // form clear
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full grid md:grid-cols-2"
      >
        {/* Left Side — Premium Image */}
        <div className="hidden md:block bg-gradient-to-tr from-blue-400 to-indigo-500 p-8 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/HkHcD1GB/pexels-pixabay-265087.jpg"
            alt="Register Illustration"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side — Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a strong password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Profile Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 transition"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:from-indigo-600 hover:to-blue-600 transition font-semibold"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span className="text-indigo-500 cursor-pointer">Login</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
