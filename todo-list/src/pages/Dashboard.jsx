
import { Link } from 'react-router-dom'

function Dashboard({ tasks = [] }) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.done).length
  const pendingTasks = totalTasks - completedTasks

  const stats = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      color: 'text-green-400',
      icon: '🗒'
    },
    {
      title: 'Completed Tasks',
      value: completedTasks,
      color: 'text-green-400',
      icon: '✓'
    },
    {
      title: 'Pending Tasks',
      value: pendingTasks,
      color: 'text-green-400',
      icon: '◷'
    }
  ]

  return (
    <div className="mx-auto max-w-6xl">

      {/* Welcome Section */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-green-400">
          YOUR WORKSPACE
        </p>

        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          Welcome to Your Dashboard!
        </h1>

        <p className="text-gray-400">
          Manage your tasks and stay organized.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#171C2E] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-400">
                {stat.title}
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                {stat.icon}
              </div>
            </div>

            <h2 className={`text-4xl font-bold ${stat.color}`}>
              {stat.value}
            </h2>

            <p className="mt-3 text-xs text-gray-500">
              Your current task overview
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-white/10 bg-[#171C2E] p-6 md:p-8">

        <h2 className="mb-2 text-xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          Get started by managing your tasks or exploring the guide.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/groups"
            className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-lg shadow-green-600/20 transition hover:bg-green-500"
          >
            + Manage Task Groups
          </Link>

          <Link
            to="/guide"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
          >
            View User Guide
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
