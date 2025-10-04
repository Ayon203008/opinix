"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineQuestionCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";

const faqs = [
  {
    question: "What is Opinix and how does it work?",
    answer:
      "Opinix is a futuristic service review platform where users can find, review, and rate businesses. Search for businesses, read verified reviews, and share your own experience.",
    icon: <AiOutlineInfoCircle size={20} className="text-blue-400" />,
  },
  {
    question: "How do I submit a review?",
    answer:
      "Search for the business you want to review, click it, and hit the “Write a Review” button. Fill in your rating, title, and description, then submit.",
    icon: <BiMessageDetail size={20} className="text-purple-400" />,
  },
  {
    question: "Is Opinix free to use?",
    answer:
      "Yes! Opinix is free for users to read and submit reviews — forever.",
    icon: <MdOutlineContactSupport size={20} className="text-green-400" />,
  },
  {
    question: "How do you ensure reviews are authentic?",
    answer:
      "We use AI-powered verification to detect fake reviews and ensure only genuine feedback is shown.",
    icon: <AiOutlineInfoCircle size={20} className="text-yellow-400" />,
  },
  {
    question: "Can I edit or delete my review?",
    answer:
      "Yes, you can edit or delete your review anytime from your profile dashboard.",
    icon: <BiMessageDetail size={20} className="text-red-400" />,
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
      {/* Background shapes for futuristic feel */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="100" fill="#A5D8FF" />
          <circle cx="600" cy="200" r="200" fill="#CBE4F9" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AiOutlineQuestionCircle
            size={48}
            className="mx-auto text-gradient-to-r from-purple-400 to-blue-500"
          />
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Discover how Opinix works and find answers to your queries.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-start gap-4"
              >
                <div className="flex items-center gap-2">
                  {faq.icon}
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <AiOutlineMinus size={24} className="text-blue-600" />
                ) : (
                  <AiOutlinePlus size={24} className="text-blue-600" />
                )}
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 flex items-start gap-2 text-gray-600"
                  >
                    <AiOutlineQuestionCircle size={18} className="mt-1 text-blue-400" />
                    <span>{faq.answer}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
