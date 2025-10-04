"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IconUsers, IconTools, IconStar } from "@tabler/icons-react";

export default function StatsSection() {
  const stats = [
    { value: 100, label: "Total Users", icon: <IconUsers size={40} /> },
    { value: 36, label: "Total Services", icon: <IconTools size={40} /> },
    { value: 185, label: "Total Reviewers", icon: <IconStar size={40} /> },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increments = stats.map(stat => stat.value / totalFrames);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      setCounts(prev => prev.map((count, i) => {
        const next = count + increments[i];
        return next >= stats[i].value ? stats[i].value : next;
      }));

      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full bg-gradient-to-r from-cyan-100 to-pink-100 opacity-50"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative flex flex-col items-center p-8 bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg hover:scale-105 hover:shadow-cyan-200 transition-transform duration-300"
            >
              {/* Glowing icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 rounded-full bg-gradient-to-r from-cyan-300 to-pink-300 text-white mb-4 shadow-md"
              >
                {stat.icon}
              </motion.div>

              {/* Animated numbers */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"
              >
                {Math.floor(counts[idx])}
              </motion.div>

              <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>

              {/* Neon progress bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(counts[idx] / stat.value) * 100}%` }}
                transition={{ duration: 2 }}
                className="h-1 rounded-full mt-4 bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="/about"
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition"
          >
            See Full Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
