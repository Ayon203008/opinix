"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaChartPie, FaCog, FaUser } from "react-icons/fa";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Analytics", icon: <FaChartPie /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <motion.div
      initial={{ width: 60 }}
      animate={{ width: isHovered ? 200 : 60 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-screen bg-white dark:bg-gray-800 shadow-lg flex flex-col"
    >
      <div className="flex flex-col p-4 space-y-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
              isHovered
                ? "hover:bg-indigo-500 hover:text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xl">{item.icon}</span>
            {isHovered && <span className="text-md font-medium">{item.name}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
