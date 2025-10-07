"use client";

import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function AddServiceForm() {
 const handleSubmit = async (e) => {
  e.preventDefault();

  const serviceData = {
    companyName: e.target.companyName.value,
    title: e.target.title.value,
    description: e.target.description.value,
    category: e.target.category.value,
    price: e.target.price.value,
    website: e.target.website.value,
    email: e.target.email.value,
    image: e.target.image.value,
  };

  try {
    const response = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      e.target.reset(); // Clear form
    } else {
      alert("Error submitting service: " + result.error);
    }
  } catch (error) {
    console.error(error);
    alert("Error submitting service");
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          { label: "Company Name", name: "companyName", placeholder: "SEO Masters" },
          { label: "Title", name: "title", placeholder: "SEO Optimization" },
          { label: "Description", name: "description", placeholder: "Improve your website's ranking on Google", type: "textarea" },
          { label: "Category", name: "category", placeholder: "Marketing" },
          { label: "Price", name: "price", placeholder: "150", type: "number" },
          { label: "Website", name: "website", placeholder: "https://seomasters.com", type: "url" },
          { label: "Email", name: "email", placeholder: "contact@seomasters.com", type: "email" },
          { label: "Image URL", name: "image", placeholder: "https://i.postimg.cc/HkHcD1GB/pexels-pixabay-265087.jpg", type: "url" },
        ].map((field, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="space-y-1"
          >
            <label className="block mb-1 font-medium">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                placeholder={field.placeholder}
                required
              />
            ) : (
              <input
                type={field.type || "text"}
                name={field.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
                placeholder={field.placeholder}
                required
              />
            )}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.div className="col-span-full">
          <button
            type="submit"
            whileHover={{ scale: 1.03 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Add Service
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
}
