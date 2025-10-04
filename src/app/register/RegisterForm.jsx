"use client";

import React, { useState } from "react";
import Lottie from "react-lottie-player";
import RegisterLottie from "../../../public/Lottie/Sign up.json";

export default function RegisterForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Name:", name, "Email:", email, "Password:", password, "Image:", image);

    alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden max-w-4xl">
        
        {/* Left Side: Lottie Animation */}
        <div className="md:w-1/2 bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center p-6">
          <Lottie
            loop
            animationData={RegisterLottie}
            play
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Right Side: Register Form */}
        <div className="md:w-1/2 bg-white p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter a strong password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Profile Image</label>
              <div
                id="dropArea"
                className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-400 transition"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("fileInput").click()}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mx-auto w-24 h-24 object-cover rounded-full border-2 border-blue-300"
                  />
                ) : (
                  "Drag & Drop or Click to Upload"
                )}
                <input
                  type="file"
                  name="image"
                  id="fileInput"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account? <span className="text-blue-500 cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
