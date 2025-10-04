"use client";

import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
