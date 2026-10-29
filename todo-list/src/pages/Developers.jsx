
import { Link } from 'react-router-dom'

function Developers() {
  // GROUP MEMBERS
  const developers = [
    {
      name: 'HANNA ELIZABETH BALBIN',
      role: 'React Setup & Dashboard',
      initials: 'M1'
    },
    {
      name: 'VIDIE ALLIESA PAÑO',
      role: 'Task Groups & Categories',
      initials: 'M2'
    },
    {
      name: 'AIRA JOY DEMETILLO',
      role: 'Task Management Functionality',
      initials: 'M3'
    },
    {
      name: 'GABRIEL ANNE ALMENIANA',
      role: 'UI Design & Documentation',
      initials: 'M4'
    }
  ]

  return (
    <div className="mx-auto max-w-6xl">

      {/* Page Heading */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-green-400">
          THE PEOPLE BEHIND YourTask
        </p>

        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          Meet the Developers
        </h1>

        <p className="text-gray-400">
          Get to know the team who designed and developed YourTask.
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-10 rounded-2xl border border-green-500/20 bg-violet-500/10 p-6 md:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-2xl">
          💻
        </div>

        <h2 className="mb-3 text-xl font-bold text-white">
          Our Development Team
        </h2>

        <p className="max-w-3xl leading-relaxed text-gray-300">
          YourTask is a To-Do List web application developed
          as part of DCIT 26: Application Development and
          Emerging Technologies. Our team worked together
          to create a responsive and interactive task
          management system using React, Tailwind CSS,
          and React Router DOM.
        </p>
      </div>

      {/* Developer Cards */}
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">

        {developers.map((developer, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 bg-[#171C2E] p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-green-500/10"
          >
            {/* Avatar */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 text-2xl font-bold text-green-300 transition group-hover:bg-green-600 group-hover:text-white">
              {developer.initials}
            </div>

            {/* Name */}
            <h2 className="mb-2 text-xl font-bold text-white">
              {developer.name}
            </h2>

            {/* Role */}
            <p className="mb-5 text-sm font-medium text-green-400">
              {developer.role}
            </p>

            <div className="border-t border-white/10 pt-5">
              <span className="text-xs text-gray-500">
                YourTask Development Team
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="rounded-2xl border border-white/10 bg-[#171C2E] p-6 text-center md:p-8">
        <h2 className="mb-2 text-lg font-bold text-white">
          Built with React & Tailwind CSS
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          A DCIT 26 Laboratory 3 Project
        </p>

        <Link
          to="/"
          className="inline-block rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
        >
          Back to Dashboard
        </Link>
      </div>

    </div>
  )
}

export default Developers
