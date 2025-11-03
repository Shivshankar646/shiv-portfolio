import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 relative overflow-hidden"
    >
      {/* Dynamic Glowing Light that moves with mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-sky-500 to-teal-400 blur-3xl opacity-25"
        animate={{
          x: mousePosition.x * 200,
          y: mousePosition.y * 200,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      {/* Floating Profile Image */}
      <motion.img
        src={profile}
        alt="Shivshankar"
        className="w-48 h-48 rounded-full border-4 border-sky-400 shadow-xl z-10 mb-6"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-sky-400">Shivshankar</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-xl md:text-2xl text-sky-300 mb-6 font-medium z-10"
      >
        <ReactTyped
          strings={[
            "Web Developer 💻",
            "UI Designer 🎨",
            "Freelancer 🌎",
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />
      </motion.div>

      {/* Subtext */}
      <motion.p
        className="text-lg md:text-xl max-w-xl text-gray-300 mb-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I craft modern, responsive, and interactive web experiences using{" "}
        <span className="text-sky-300">React</span> and{" "}
        <span className="text-teal-300">Tailwind CSS</span>.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 z-10"
      >
        View My Work
      </motion.a>
    </section>
  );
}
