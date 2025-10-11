"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaTools,
  FaStar,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { label: "Active Users", value: 1200, icon: <FaUsers /> },
    { label: "Services Listed", value: 450, icon: <FaTools /> },
    { label: "Reviews Posted", value: 2900, icon: <FaStar /> },
    { label: "Partnerships", value: 76, icon: <FaHandshake /> },
    { label: "Growth Rate", value: 98, icon: <FaChartLine />, suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increments = stats.map(stat => stat.value / totalFrames);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      setCounts(prev =>
        prev.map((count, i) => {
          const next = count + increments[i];
          return next >= stats[i].value ? stats[i].value : next;
        })
      );

      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden text-white">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.2),transparent_70%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.2),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="group relative p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500"
            >
              {/* Animated gradient border ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-[#0f172a] rounded-3xl"></div>
              </motion.div>

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className="p-5 mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 text-white shadow-lg group-hover:shadow-pink-500/40"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  <div className="text-4xl">{stat.icon}</div>
                </motion.div>

                <motion.h3
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"
                >
                  {Math.floor(counts[i])}
                  {stat.suffix || ""}
                </motion.h3>

                <p className="text-lg text-gray-300 font-medium group-hover:text-white transition">
                  {stat.label}
                </p>

                {/* Glowing underline */}
                <motion.div
                  className="mt-3 w-10 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <a
            href="/about"
            className="inline-block px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 hover:scale-105 shadow-xl hover:shadow-cyan-400/30 transition-transform duration-300"
          >
            Explore More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
