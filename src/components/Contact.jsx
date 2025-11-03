import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-24 px-6 relative"
    >
      <h2 className="text-5xl font-bold text-center mb-12 tracking-wide">
        📬 <span className="text-sky-400">Contact Me</span>
      </h2>

      <motion.div
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Contact Text + Socials */}
        <div>
          <p className="text-slate-300 mb-6 text-lg leading-relaxed">
            Let’s connect! Whether you have an opportunity, a question, or just
            want to say hi — feel free to reach out.
          </p>
          <div className="flex gap-6 text-3xl mt-6">
            <a
              href="https://github.com/Shivshankar646"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shivshankarmunde"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shivshankar646@gmail.com"
              className="hover:text-sky-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/myzejdgp" // <-- Replace this with your Formspree endpoint if you create one
          method="POST"
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sky-300 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sky-300 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sky-300 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
