
import UserProfile from './components/UserProfile'

import { Routes, Route, NavLink } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Groups from './pages/Groups'
import GroupTasks from './pages/GroupTasks'
import Guide from './pages/Guide'
import Developers from './pages/Developers'
import UserInformation from './pages/UserInformation'

import useTaskStore from './store/taskStore'

function App() {
  const tasks = useTaskStore(state => state.tasks)
  const groups = useTaskStore(state => state.groups)

  // GET FUNCTIONS FROM ZUSTAND
  const addGroup = useTaskStore(state => state.addGroup)
  const deleteGroup = useTaskStore(state => state.deleteGroup)
  const addTask = useTaskStore(state => state.addTask)
  const toggleTask = useTaskStore(state => state.toggleTask)
  const deleteTask = useTaskStore(state => state.deleteTask)

  // SIDEBAR NAVIGATION
  const navigation = [
    { name: 'Dashboard', path: '/', icon: '◈' },
    { name: 'Task Groups', path: '/groups', icon: '▦' },
    { name: 'User Information', path: '/users', icon: '♙' },
    { name: 'User Guide', path: '/guide', icon: '◎' },
    { name: 'Developers', path: '/developers', icon: '♧' }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 md:flex">

      {/* SIDEBAR */}
      <aside className="border-b border-white/10 bg-[#111625] p-5 md:min-h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:p-6">

        {/* WEBSITE LOGO */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-2xl font-bold shadow-lg shadow-green-600/20">
            ✓
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              YourTask
            </h1>
            <p className="text-xs text-gray-400">
              Your productivity space
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-1">
          {navigation.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                    : 'text-gray-400 hover:bg-green-500/10 hover:text-green-400'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* SIDEBAR MESSAGE */}
        <div className="mt-10 hidden rounded-xl border border-green-500/20 bg-violet-500/10 p-4 md:block">
          <p className="text-sm font-semibold text-green-300">
            Stay organized
          </p>
          <p className="mt-2 text-xs leading-relaxed text-gray-400">
            Small steps lead to big accomplishments.
          </p>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <div className="min-w-0 flex-1">

        <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-10">
          <p className="text-sm text-gray-400">
            Workspace / Task Management
          </p>

          <UserProfile />
        </header>

        <main className="mx-auto max-w-7xl p-5 md:p-10">

          <Routes>

            {/* DASHBOARD */}
            <Route
              path="/"
              element={<Dashboard tasks={tasks} />}
            />

            {/* TASK GROUPS */}
            <Route
              path="/groups"
              element={
                <Groups
                  groups={groups}
                  tasks={tasks}
                  addGroup={addGroup}
                  deleteGroup={deleteGroup}
                />
              }
            />

            {/* GROUP TASKS */}
            <Route
              path="/groups/:groupId"
              element={
                <GroupTasks
                  groups={groups}
                  tasks={tasks}
                  addTask={addTask}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              }
            />

            {/* USER INFORMATION */}
            <Route
              path="/users"
              element={<UserInformation />}
            />

            {/* USER GUIDE */}
            <Route
              path="/guide"
              element={<Guide />}
            />

            {/* DEVELOPERS */}
            <Route
              path="/developers"
              element={<Developers />}
            />

          </Routes>

        </main>
      </div>
    </div>
  )
}

export default App
