
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTaskStore = create(
  persist(
    (set) => ({
      // INITIAL DATA
      tasks: [],
      groups: [],

      // ADD GROUP
      addGroup: (groupName) =>
        set((state) => ({
          groups: [
            ...state.groups,
            {
              id: crypto.randomUUID(),
              name: groupName
            }
          ]
        })),

      // DELETE GROUP AND ITS TASKS
      deleteGroup: (groupId) =>
        set((state) => ({
          groups: state.groups.filter(
            (group) => group.id !== groupId
          ),
          tasks: state.tasks.filter(
            (task) => task.groupId !== groupId
          )
        })),

      // ADD TASK
      addTask: (taskName, groupId) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              name: taskName,
              groupId,
              done: false
            }
          ]
        })),

      // TOGGLE TASK
      toggleTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId
              ? { ...task, done: !task.done }
              : task
          )
        })),

      // DELETE TASK
      deleteTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter(
            (task) => task.id !== taskId
          )
        }))
    }),

    {
  name: 'taskflow-storage',

  onRehydrateStorage: () => (state) => {
    if (!state) return

    const oldTasks = localStorage.getItem('todoTasks')
    const oldGroups = localStorage.getItem('todoGroups')

    if (oldTasks || oldGroups) {
      useTaskStore.setState({
        tasks: oldTasks ? JSON.parse(oldTasks) : state.tasks,
        groups: oldGroups ? JSON.parse(oldGroups) : state.groups
      })

      localStorage.removeItem('todoTasks')
      localStorage.removeItem('todoGroups')
    }
  }
    }
  )
)

export default useTaskStore
