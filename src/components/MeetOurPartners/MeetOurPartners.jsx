"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function MeetOurPartners() {
  const partners = [
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      desc: "Leading search engine and AI innovator."
    },
    {
      name: "Microsoft",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      desc: "Powering productivity and cloud solutions."
    },
    {
      name: "Amazon",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      desc: "E-commerce and cloud computing giant."
    },
    {
      name: "Apple",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      desc: "Innovating technology with style."
    },
    {
      name: "Netflix",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      desc: "Entertainment at your fingertips."
    },
  ];

  const carouselRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setScrollWidth(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-cyan-50 py-24 overflow-hidden">
      {/* Animated Gradient Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient"
      >
        Meet Our Partners
      </motion.h2>

      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        We collaborate with world-class brands to deliver innovative solutions.  
        These partnerships fuel growth, trust, and excellence.
      </p>

      {/* Logo Carousel */}
      <motion.div
        ref={carouselRef}
        className="flex gap-10 overflow-x-auto scrollbar-hide px-6 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {partners.concat(partners).map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              rotateY: 5,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"
            }}
            className="relative flex-shrink-0 p-6 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300"
          >
            <img
              src={partner.src}
              alt={partner.name}
              className="h-16 object-contain mx-auto"
            />
            <p className="text-center mt-2 font-semibold">{partner.name}</p>

            {/* Hover Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 rounded-xl flex flex-col justify-center items-center text-white text-center p-4 opacity-0 transition-opacity"
            >
              <p className="text-sm">{partner.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href="/partners"
          className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition"
        >
          Become a Partner
        </a>
      </motion.div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 6s ease infinite;
        }
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
