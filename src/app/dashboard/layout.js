// app/dashboard/layout.js
"use client";

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-6 flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
