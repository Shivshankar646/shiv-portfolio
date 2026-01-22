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
  {
    title: "Job Application Tracker",
    description: "Development is going on",
    tech: ["React","Tailwind CSS"],
    github: "https://github.com/Shivshankar646/job-tracker",
    link: "https://job-tracker-psi-jet.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 overflow-hidden text-white bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="absolute rounded-full top-10 left-20 w-72 h-72 bg-sky-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-10 right-20 w-72 h-72 bg-indigo-500/20 blur-3xl animate-pulse"></div>

      <h2 className="mb-16 text-5xl font-bold tracking-wide text-center">
        🚀 Featured <span className="text-sky-400">Projects</span>
      </h2>

      <div className="relative z-10 grid gap-12 mx-auto md:grid-cols-3 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-8 transition-all duration-500 border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl hover:shadow-sky-500/30"
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
            <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-40 mb-4 border rounded-xl border-white/10"/>
            <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"></div>
            <h3 className="mb-3 text-2xl font-semibold text-sky-300">{project.title}</h3>
            <p className="mb-4 leading-relaxed text-slate-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {/* Tech badges with icons */}
            {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 text-xs border rounded-full shadow-sm bg-sky-900/40 border-sky-500/30 text-sky-200"
                >
                  {/* Icon logic */}
                  {tech.includes("React") && <i className="text-sm devicon-react-original text-sky-300"></i>}
                  {tech.includes("JavaScript") && <i className="text-sm text-yellow-300 devicon-javascript-plain"></i>}
                  {tech.includes("HTML") && <i className="text-sm text-orange-400 devicon-html5-plain"></i>}
                  {tech.includes("CSS") && <i className="text-sm text-blue-400 devicon-css3-plain"></i>}
                  {tech.includes("Tailwind") && <i className="text-sm devicon-tailwindcss-plain text-sky-400"></i>}
                  {tech.includes("API") && <i className="text-sm text-green-400 devicon-nodejs-plain"></i>}
                  {tech.includes("Vite") && <i className="text-sm text-purple-400 devicon-vitejs-plain"></i>}
                  {tech.includes("Chart") && <i className="text-sm text-red-400 devicon-d3js-plain"></i>}
                  {tech.includes("PWA") && <i className="text-sm text-blue-300 devicon-chrome-plain"></i>}

                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                className="px-4 py-2 text-sm transition rounded-lg bg-sky-600 hover:bg-sky-500"
              >
                {project.link === "#" ? "Coming Soon" : "Live Demo"}
              </a>
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 text-sm transition rounded-lg bg-slate-700 hover:bg-slate-600"
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
