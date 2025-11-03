import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-gray-950 text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400 mb-10"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center text-gray-300 leading-relaxed text-lg space-y-5"
      >
        <p>
          I’m <span className="text-sky-400 font-semibold">Shivshankar Suresh Munde</span>,
          a passionate web developer who loves turning creative ideas into
          functional, user-friendly websites. I focus on clean UI, smooth
          animations, and responsive designs.
        </p>

        <p>
          My main stack includes{" "}
          <span className="text-teal-400 font-semibold">React</span> and{" "}
          <span className="text-teal-400 font-semibold">Tailwind CSS</span>,
          and I’m continuously learning new technologies to improve my craft.
          I enjoy solving challenges, learning from real-world projects, and
          creating digital experiences that make an impact.
        </p>

        <p>
          My goal is to build a career as a{" "}
          <span className="text-sky-400 font-semibold">remote web developer</span>,
          contributing to meaningful projects while building my own digital
          business in the future.
        </p>
      </motion.div>

      {/* Fun tag line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-sky-400 font-medium text-lg"
      >
        “Code. Create. Conquer.”
      </motion.p>
    </section>
  );
}
