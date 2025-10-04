"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { LucideMail, LucidePhoneCall, LucideMapPin, LucideArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function UltimateFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-r from-cyan-500 to-indigo-500 text-white mt-20 shadow-xl">
      {/* Glow Animation Layer */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-500 animate-gradient-x pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-cyan-300 shadow-lg text-indigo-600 animate-pulse">
              <FaStar className="text-2xl" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-white to-cyan-300 text-transparent bg-clip-text">
              Opinix
            </span>
          </div>
          <p className="text-white/90 text-sm">
            Opinix is your trusted platform to share & explore genuine service reviews.
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <LucideMail className="w-4 h-4 text-white/80" />
              <span>support@opinix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <LucidePhoneCall className="w-4 h-4 text-white/80" />
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideMapPin className="w-4 h-4 text-white/80" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Newsletter</h3>
          <p className="text-white/90 text-sm mb-4">
            Get the latest updates and reviews directly in your inbox.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg flex-1 border border-white/40 focus:outline-none focus:ring-2 focus:ring-white/60 bg-white/20 text-white"
            />
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-white to-cyan-300 text-indigo-700 font-semibold hover:opacity-90 transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sitemap / Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white/80 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-white/80 transition">Services</Link></li>
            <li><Link href="/login" className="hover:text-white/80 transition">Login</Link></li>
            <li><Link href="/register" className="hover:text-white/80 transition">Register</Link></li>
          </ul>
          <h3 className="text-lg font-semibold text-white mt-6 mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white/80 transition">Web Development</Link></li>
            <li><Link href="#" className="hover:text-white/80 transition">Mobile Apps</Link></li>
            <li><Link href="#" className="hover:text-white/80 transition">IT Support</Link></li>
            <li><Link href="#" className="hover:text-white/80 transition">Cloud Services</Link></li>
          </ul>
        </div>

        {/* Social Media + Testimonials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/80 transition transform hover:scale-110"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-white/80 transition transform hover:scale-110"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-white/80 transition transform hover:scale-110"><FaLinkedinIn size={20} /></Link>
            <Link href="#" className="hover:text-white/80 transition transform hover:scale-110"><FaInstagram size={20} /></Link>
          </div>

          {/* Testimonials Card */}
          <div className="bg-white/20 p-4 rounded-lg shadow-lg">
            <h4 className="font-semibold mb-2">Testimonials</h4>
            <p className="text-sm italic">"Opinix helped me choose the best service with real reviews. Amazing platform!"</p>
            <p className="mt-2 text-xs">- Sarah K.</p>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-white/30 mt-6 py-4 text-center text-sm text-white/90">
        <span>© {new Date().getFullYear()} Opinix. All rights reserved. </span>
        <Link href="/terms" className="hover:text-white ml-2">Terms of Service</Link> | 
        <Link href="/privacy" className="hover:text-white ml-2">Privacy Policy</Link>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-white to-cyan-300 p-3 rounded-full shadow-xl text-indigo-700 hover:scale-110 transition-transform z-50"
        >
          <LucideArrowUpCircle size={28} />
        </motion.button>
      )}
    </footer>
  );
}
