import React from 'react'

export default function GithubCard(){
  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-100">
        GitHub Activity
      </h2>
      <p className="mt-2 text-center text-slate-300">
        Recent contributions and summary.
      </p>

      <div className="grid gap-6 mt-6 place-items-center">
        <div className="p-6 text-center border bg-white/3 rounded-xl border-white/5">
          <h4 className="font-medium text-gray-100">
            Contribution calendar
          </h4>
          <img
            className="mx-auto mt-3"
            src="https://ghchart.rshah.org/Shivshankar646"
            alt="GitHub chart"
          />
        </div>
      </div>
    </div>
  )
}
