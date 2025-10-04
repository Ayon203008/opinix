"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function AddServicePage() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("category", e.target.category.value);
    if (image) formData.append("image", image);

    const res = await fetch("/api/services", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Service added successfully!");
      e.target.reset();
      setPreview(null);
    } else {
      alert("Error adding service.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Add Service</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="w-full p-3 border rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Service Description"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-3 border rounded"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full p-3 border rounded"
            required
          />

          {/* Drag & Drop Image Upload */}
          <div
            className="w-full p-4 border-2 border-dashed rounded-lg flex flex-col items-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {preview ? (
              <Image src={preview} alt="Preview" className="w-24 h-24 rounded-full" />
            ) : (
              <span>Drag & Drop or Click to Upload Image</span>
            )}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <button className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}
