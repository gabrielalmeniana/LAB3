
import { useEffect, useState } from 'react'
import { getUsers } from '../services/userService'

function UserInformation() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // FETCH USERS FROM API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const data = await getUsers()
        setUsers(data)
        setError('')
      } catch (err) {
        setError('Unable to load user information. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          User Information
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          View user details retrieved from the DummyJSON API.
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="rounded-xl border border-white/10 bg-[#111625] p-8 text-center">
          <p className="text-green-400 animate-pulse">
            Loading user information...
          </p>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-red-400">
          {error}
        </div>
      )}

      {/* USER CARDS */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {users.map(user => (
              <div
                key={user.id}
                className="rounded-2xl border border-white/10 bg-[#111625] p-6 transition hover:border-green-500/40"
              >

                <h2 className="mb-4 text-xl font-bold text-green-400">
                  {user.firstName} {user.lastName}
                </h2>

                <div className="space-y-3 text-sm">

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Age:
                    </span>{' '}
                    {user.age}
                  </p>

                  <p className="break-all text-gray-300">
                    <span className="font-semibold text-white">
                      Email:
                    </span>{' '}
                    {user.email}
                  </p>

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Phone:
                    </span>{' '}
                    {user.phone}
                  </p>

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      University:
                    </span>{' '}
                    {user.university || 'Not available'}
                  </p>

                </div>
              </div>
            ))}

          </div>

          <p className="text-xs text-gray-500">
            Sample user data retrieved using Axios from DummyJSON API.
          </p>
        </>
      )}

    </div>
  )
}

export default UserInformation
