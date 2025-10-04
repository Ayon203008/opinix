"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideSearch, LucideStar, LucideEdit } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <LucideSearch size={32} />,
    title: "Search Businesses",
    description:
      "Find the businesses you care about by name or category using our smart search.",
  },
  {
    id: 2,
    icon: <LucideStar size={32} />,
    title: "Read Honest Reviews",
    description:
      "See real, detailed reviews from verified users to make informed decisions.",
  },
  {
    id: 3,
    icon: <LucideEdit size={32} />,
    title: "Share Your Experience",
    description:
      "Leave a review to help others and build trust within the community.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      {/* Section Intro */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">How Opinix Works</h2>
        <p className="text-lg text-gray-600">
          Follow these simple steps to explore, review, and trust businesses.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Step Icon */}
            <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
              {step.icon}
            </div>

            {/* Step Number */}
            <div className="text-2xl font-bold text-blue-600 mb-2">
              Step {step.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
