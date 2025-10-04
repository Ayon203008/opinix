"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 overflow-hidden">
      <div className="container mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Trusted Reviews for Everything You Care About
          </h1>
          <p className="text-lg text-gray-200">
            Opinix helps you find trusted reviews and share your own experiences.
            Millions of people rely on Opinix every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              See How It Works
            </button>
          </div>

          {/* Trust Stats */}
          <div className="flex gap-8 mt-8 text-white">
            <div>
              <span className="text-2xl font-bold">1M+</span>
              <p className="text-sm">Reviews</p>
            </div>
            <div>
              <span className="text-2xl font-bold">500K+</span>
              <p className="text-sm">Businesses</p>
            </div>
            <div>
              <span className="text-2xl font-bold">99%</span>
              <p className="text-sm">Trust Rating</p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <img
            src="/hero-illustration.svg"
            alt="Opinix Hero Illustration"
            className="w-full max-w-lg animate-fadeIn"
          />
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 to-indigo-900 opacity-50 pointer-events-none"></div>
    </section>
  );
}
