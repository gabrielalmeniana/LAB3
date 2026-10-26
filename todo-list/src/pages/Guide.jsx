
import { Link } from 'react-router-dom'

function Guide() {
  const instructions = [
    {
      title: 'Create a Task Group',
      description:
        'Navigate to the Task Groups page. Enter a group name such as School Activities or Personal Tasks, then click the Add Group button.'
    },
    {
      title: 'Open a Task Group',
      description:
        'On the Task Groups page, click any group card to view the tasks belonging to that category.'
    },
    {
      title: 'Add a New Task',
      description:
        'Inside a selected group, enter your task in the input field and click Add Task. New tasks are automatically marked as Not Done.'
    },
    {
      title: 'Mark a Task as Done',
      description:
        'Click the Mark Done button beside a task. Its status changes to Done, and the task name will have a line through it.'
    },
    {
      title: 'Mark a Task as Not Done',
      description:
        'Click Mark Not Done to change a completed task back to Not Done.'
    },
    {
      title: 'Delete a Task',
      description:
        'Click the Delete button beside the task you want to remove. The task will be deleted from the selected group.'
    },
    {
      title: 'Navigate Between Pages',
      description:
        'Use the navigation sidebar to switch between Dashboard, Task Groups, User Guide, and Developers. Use Back to Groups to return from a task list.'
    },
    {
      title: 'Track Your Progress',
      description:
        'Visit the Dashboard to view your total, completed, and pending tasks. The statistics update automatically whenever tasks change.'
    }
  ]

  return (
    <div className="mx-auto max-w-6xl">

      {/* Page Heading */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-green-400">
          HELP CENTER
        </p>

        <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl">
          User Guide
        </h1>

        <p className="text-gray-400">
          Everything you need to know about using TaskFlow.
        </p>
      </div>

      {/* Introduction Card */}
      <div className="mb-10 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-6 md:p-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-2xl">
          📖
        </div>

        <h2 className="mb-3 text-xl font-bold text-white">
          Welcome to TaskFlow!
        </h2>

        <p className="max-w-3xl leading-relaxed text-gray-300">
          TaskFlow helps you organize your activities, manage
          tasks across different groups, and track your progress.
          Follow the steps below to get started.
        </p>
      </div>

      {/* Instruction Cards */}
      <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#171C2E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 font-bold text-green-400">
              {String(index + 1).padStart(2, '0')}
            </div>

            <h3 className="mb-3 text-lg font-bold text-white">
              {instruction.title}
            </h3>

            <p className="text-sm leading-7 text-gray-400">
              {instruction.description}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Section */}
      <div className="rounded-2xl border border-white/10 bg-[#171C2E] p-6 md:p-8">
        <h2 className="mb-2 text-xl font-bold text-white">
          Ready to Get Started?
        </h2>

        <p className="mb-6 text-sm text-gray-400">
          Start organizing your tasks or return to your dashboard.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/groups"
            className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-500"
          >
            + Go to Task Groups
          </Link>

          <Link
            to="/"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 transition hover:bg-white/10"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Guide
