
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Groups({ groups, addGroup }) {
  const [groupName, setGroupName] = useState('')

  const handleAddGroup = (e) => {
    e.preventDefault()

    if (groupName.trim() === '') return

    addGroup(groupName.trim())
    setGroupName('')
  }

  return (
    <div className="mx-auto max-w-6xl">

      {/* Page Heading */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-green-400">
          ORGANIZE YOUR WORKSPACE
        </p>

        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          My Task Groups
        </h1>

        <p className="text-gray-400">
          Keep your tasks organized into different categories.
        </p>
      </div>

      {/* Create Group Section */}
      <div className="mb-10 rounded-2xl border border-white/10 bg-[#171C2E] p-6 md:p-8">

        <h2 className="mb-2 text-xl font-bold text-white">
          Create New Group
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          Start by creating a category for your tasks.
        </p>

        <form
          onSubmit={handleAddGroup}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            placeholder="e.g. School Activities, Personal Tasks..."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />

          <button
            type="submit"
            className="rounded-xl bg-green-600 px-7 py-3 font-medium text-white shadow-lg shadow-green-600/20 transition hover:bg-green-500"
          >
            + Add Group
          </button>
        </form>
      </div>

      {/* Groups Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Your Groups
        </h2>

        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-300">
          {groups.length} Groups
        </span>
      </div>

      {/* Group Cards */}
      {groups.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-[#171C2E] p-12 text-center">
          <div className="mb-4 text-4xl">📁</div>

          <h3 className="mb-2 text-lg font-semibold text-white">
            No groups created yet
          </h3>

          <p className="text-sm text-gray-400">
            Create your first group to start organizing tasks.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <Link
              key={group.id}
              to={`/groups/${group.id}`}
              className="group rounded-2xl border border-white/10 bg-[#171C2E] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-green-500/10"
            >
              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-2xl text-green-400">
                  {['📚', '📁', '📝', '📅'][index % 4]}
                </div>

                <span className="text-xl text-gray-500 transition group-hover:text-green-400">
                  ↗
                </span>
              </div>

              <h3 className="mb-2 break-words text-lg font-bold text-white">
                {group.name}
              </h3>

              <p className="text-sm text-gray-400">
                Open this group to manage your tasks.
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-sm font-medium text-green-400">
                  View Tasks →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Groups
