"use client";

import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaRocket, FaCode, FaLightbulb, FaShieldAlt, FaStar, FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 font-inter">
      
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          About <span className="text-yellow-300">ServeWise</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed"
        >
          The ultimate platform to discover, review, and share authentic service experiences.  
          We help communities grow through transparency and innovation.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-blue-700">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-5 text-gray-700">
            At <strong>ServeWise</strong>, our mission is to empower people with reliable insights and honest feedback 
            before choosing any service. We bridge the gap between trust and experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Transparency and credibility drive our platform — connecting service providers and seekers seamlessly.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-blue-700 mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { icon: <FaHeart className="text-red-500 w-12 h-12 mx-auto" />, title: "Integrity", text: "We ensure every review is genuine — building a culture of honesty and respect." },
              { icon: <FaUsers className="text-green-500 w-12 h-12 mx-auto" />, title: "Community", text: "We believe collaboration sparks growth — connecting users and providers." },
              { icon: <FaRocket className="text-indigo-500 w-12 h-12 mx-auto" />, title: "Innovation", text: "We constantly evolve our platform to stay modern, fast, and user-friendly." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                viewport={{ once: true }}
                className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {item.icon}
                <h3 className="text-2xl font-semibold mt-4 mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-blue-700 mb-16"
        >
          What We Offer
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { icon: <FaLightbulb className="text-yellow-500 w-12 h-12 mx-auto" />, title: "Smart Search", text: "Find services easily with our intuitive, category-based discovery system." },
            { icon: <FaShieldAlt className="text-blue-600 w-12 h-12 mx-auto" />, title: "Verified Reviews", text: "Every review is verified for authenticity to maintain credibility." },
            { icon: <FaStar className="text-pink-500 w-12 h-12 mx-auto" />, title: "User Empowerment", text: "We give users the tools to voice their experiences and inspire others." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {item.icon}
              <h3 className="mt-4 text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12"
        >
          Built With Modern Technologies
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {[{icon:<SiNextdotjs />,name:"Next.js"},{icon:<FaReact />,name:"React"},{icon:<SiMongodb />,name:"MongoDB"},{icon:<SiExpress />,name:"Express.js"},{icon:<SiTailwindcss />,name:"TailwindCSS"}].map((t,i)=>(
            <motion.div key={i} initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{delay:0.1*i}} viewport={{once:true}} className="bg-white/10 p-6 rounded-2xl w-36 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform">
              <div className="text-4xl mb-3 text-yellow-300 mx-auto">{t.icon}</div>
              <p className="font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-blue-700"
        >
          Meet the Developer 👨‍💻
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <Image
            src="/images/developer.jpg"
            alt="Developer"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-4 border-4 border-blue-600"
          />
          <h3 className="text-2xl font-semibold">Abid Hasan Ayon</h3>
          <p className="text-blue-600 font-medium">MERN Stack Developer</p>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            Passionate about building high-quality, user-focused, and scalable web
            applications. Always exploring ways to create beautiful and functional UI.
          </p>
          <div className="flex justify-center gap-5 mt-5 text-gray-700 text-2xl">
            <a href="https://github.com/" target="_blank" className="hover:text-blue-600 transition"><FaCode/></a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 transition"><FaUsers/></a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
