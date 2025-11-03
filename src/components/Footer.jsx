import React from "react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">Shivshankar Suresh Munde</span> — Built with ❤️ using{" "}
          <span className="text-sky-400">React + TailwindCSS</span>
        </p>
        <p className="text-xs mt-2 text-slate-500">
          “Turning ideas into interactive experiences.”
        </p>
      </motion.div>
    </footer>
  )
}
