import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function GithubProjects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    // Replace YOUR_GITHUB_USERNAME with your actual username
    fetch("https://api.github.com/users/Shivshankar646/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork)
        setRepos(filtered)
      })
      .catch((err) => console.error("Error fetching repos:", err))
  }, [])

  return (
    <section
      id="github"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-12 tracking-wide">
        ⚡ Latest <span className="text-sky-400">GitHub Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {repos.length === 0 ? (
          <p className="text-center text-slate-400 text-lg col-span-3">
            Loading repositories...
          </p>
        ) : (
          repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-sky-500/30 hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-sky-300">
                {repo.name}
              </h3>
              <p className="text-slate-300 mb-3 text-sm line-clamp-3">
                {repo.description || "No description available"}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {repo.language && (
                  <span className="bg-sky-900/40 border border-sky-500/30 text-sky-200 px-3 py-1 rounded-full">
                    {repo.language}
                  </span>
                )}
                <span className="text-slate-400">
                  ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))
        )}
      </div>
    </section>
  )
}
