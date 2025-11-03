import React from 'react'

export default function GithubCard(){
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center">GitHub Activity</h2>
      <p className="text-center text-slate-300 mt-2">Recent contributions and summary.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white/3 p-6 rounded-xl border border-white/5 text-center">
          <h4 className="font-medium">Contribution calendar</h4>
          <img className="mx-auto mt-3" src={`https://ghchart.rshah.org/Shivshankar646`} alt="GitHub chart" />
        </div>

        <div className="bg-white/3 p-6 rounded-xl border border-white/5 text-center">
          <h4 className="font-medium">GitHub stats</h4>
          <img className="mx-auto mt-3" src={`https://github-readme-stats.vercel.app/api?username=Shivshankar646&show_icons=true&theme=radical`} alt="GitHub stats" />
        </div>
      </div>
    </div>
  )
}
