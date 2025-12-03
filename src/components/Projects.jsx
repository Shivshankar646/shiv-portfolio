import React from "react"
import movieThumbnail from "../assets/movie-thumbnail.png"
import skysenseThumbnail from "../assets/skysense-thumbnail.png"
import ecommerceThumbnail from "../assets/ecommerce-thumbnail.png"

 "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Movie Recommendation App",
    description: "AI-powered movie recommendation web app using TMDB API with clean UI and fast search.",
    tech: ["React (Vite)", "Axios", "Custom CSS", "React Icons", "TMDB API"],
    github: "https://github.com/Shivshankar646/movie-recommendation-app",
    thumbnail: movieThumbnail,
    link: "https://movie-recommendation-beta-three.vercel.app/",
  },
  {
    title: "SkySense – Smart Weather Monitoring",
    description: "A real-time weather dashboard with charts, speech output, PWA and serverless API proxy.",
    tech: ["HTML5", "CSS3 (Tailwind)", "JavaScript (ES6+)", "OpenWeatherMap API", "Chart.js", "SpeechSynthesis API", "Vercel Serverless Functions", "PWA"],
    github: "https://github.com/Shivshankar646/skysense",
    thumbnail: skysenseThumbnail,
    link: "https://sky-sense-eosin.vercel.app/",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce platform in development with cart, filters, and product pages.",
    tech: ["React", "Context API", "Tailwind CSS", "FakeStore API"],
    github: "https://github.com/Shivshankar646/Ecommerce-Store",
    thumbnail: ecommerceThumbnail,
    link: "https://ecommerce-store-sooty-nine.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-24 px-6 relative overflow-hidden"
    >
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
            <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-4 border border-white/10"/>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-12 h-1 mb-4 rounded-full"></div>
            <h3 className="text-2xl font-semibold mb-3 text-sky-300">{project.title}</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {/* Tech badges with icons */}
            {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-xs bg-sky-900/40 border border-sky-500/30 text-sky-200 px-3 py-1 rounded-full shadow-sm"
                >
                  {/* Icon logic */}
                  {tech.includes("React") && <i className="devicon-react-original text-sky-300 text-sm"></i>}
                  {tech.includes("JavaScript") && <i className="devicon-javascript-plain text-yellow-300 text-sm"></i>}
                  {tech.includes("HTML") && <i className="devicon-html5-plain text-orange-400 text-sm"></i>}
                  {tech.includes("CSS") && <i className="devicon-css3-plain text-blue-400 text-sm"></i>}
                  {tech.includes("Tailwind") && <i className="devicon-tailwindcss-plain text-sky-400 text-sm"></i>}
                  {tech.includes("API") && <i className="devicon-nodejs-plain text-green-400 text-sm"></i>}
                  {tech.includes("Vite") && <i className="devicon-vitejs-plain text-purple-400 text-sm"></i>}
                  {tech.includes("Chart") && <i className="devicon-d3js-plain text-red-400 text-sm"></i>}
                  {tech.includes("PWA") && <i className="devicon-chrome-plain text-blue-300 text-sm"></i>}

                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-sky-600 hover:bg-sky-500 transition"
              >
                {project.link === "#" ? "Coming Soon" : "Live Demo"}
              </a>
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 text-sm rounded-lg bg-slate-700 hover:bg-slate-600 transition"
              >
                {project.github === "#" ? "No Repo" : "GitHub"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
