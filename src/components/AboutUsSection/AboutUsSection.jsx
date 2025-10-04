"use client";

import { motion } from "motion/react";
import { IconUser, IconBulb, IconShieldCheck } from "@tabler/icons-react";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-700 text-white py-20">
      {/* Wave background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(255,255,255,0.05)"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,138.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-full shadow-2xl overflow-hidden border-8 border-white/20 hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&q=80&w=1200"
              alt="About Us"
              className="w-96 h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-cyan-200 text-transparent bg-clip-text">
            About Us
          </h2>
          <p className="mb-8 text-lg opacity-90">
            At Opinix, we believe in delivering excellence through innovation.
            Our team is dedicated to creating products that not only meet but
            exceed your expectations. We combine creativity, technology, and
            trust to deliver world-class solutions.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconUser size={40} className="text-cyan-300 animate-pulse" />,
                title: "Team Excellence",
                desc: "Our talented team brings ideas to life with creativity and precision.",
              },
              {
                icon: <IconBulb size={40} className="text-yellow-300 animate-pulse" />,
                title: "Innovative Solutions",
                desc: "We leverage cutting-edge technology to solve real-world problems.",
              },
              {
                icon: <IconShieldCheck size={40} className="text-green-300 animate-pulse" />,
                title: "Trust & Security",
                desc: "Your trust is our priority — we guarantee secure and reliable services.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="font-bold text-lg">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-8 py-4 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-black font-bold rounded-full shadow-2xl hover:shadow-3xl transition"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
