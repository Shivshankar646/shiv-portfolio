import React from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS showcasing skills and projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Weather App",
    description: "A live weather forecast app powered by OpenWeather API with sleek UI design.",
    tech: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Landing Page",
    description: "A beautiful and responsive landing page built for product showcasing.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Glowing background orbs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-sky-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

      <h2 className="text-5xl font-bold text-center mb-16 tracking-wide">
        🚀 Featured <span className="text-sky-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:shadow-sky-500/30 transition-all duration-500"
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              rotateX: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
          >
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-12 h-1 mb-4 rounded-full"></div>
            <h3 className="text-2xl font-semibold mb-3 text-sky-300">{project.title}</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-sky-900/40 border border-sky-500/30 text-sky-200 px-3 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

