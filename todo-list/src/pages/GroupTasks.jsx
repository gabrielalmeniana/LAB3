import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function GroupTasks({
  groups,
  tasks,
  addTask,
  toggleTask,
  deleteTask
}) {
  const { groupId } = useParams()
  const [taskName, setTaskName] = useState('')

  // Find the selected group
  const selectedGroup = groups.find(
    group => group.id === groupId
  )

  // Display only tasks belonging to this group
  const groupTasks = tasks.filter(
    task => task.groupId === groupId
  )

  const handleAddTask = (e) => {
    e.preventDefault()

    if (taskName.trim() === '') return

    addTask(taskName.trim(), groupId)
    setTaskName('')
  }

  if (!selectedGroup) {
    return (
      <div>
        <h1 className="text-2xl font-bold">
          Group not found
        </h1>
        <Link to="/groups" className="text-blue-600">
          Back to Groups
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl">

      <Link
        to="/groups"
        className="mb-5 inline-block text-blue-600"
      >
        ← Back to Groups
      </Link>

      <h1 className="mb-2 text-3xl font-bold">
        {selectedGroup.name}
      </h1>

      <p className="mb-6 text-gray-500">
        Manage your tasks in this group.
      </p>

      {/* Add Task Form */}
      <form
        onSubmit={handleAddTask}
        className="mb-8 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 p-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-4">

        {groupTasks.length === 0 ? (
          <p className="text-gray-500">
            No tasks yet. Add your first task!
          </p>
        ) : (
          groupTasks.map(task => (
            <div
              key={task.id}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2
                  className={`font-semibold ${
                    task.done
                      ? 'text-gray-400 line-through'
                      : 'text-gray-800'
                  }`}
                >
                  {task.name}
                </h2>

                <p
                  className={`mt-1 text-sm ${
                    task.done
                      ? 'text-green-600'
                      : 'text-orange-500'
                  }`}
                >
                  {task.done ? 'Done' : 'Not Done'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  {task.done ? 'Mark Not Done' : 'Mark Done'}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  )
}

export default GroupTasks