
import { useEffect, useState } from 'react'
import { getUser } from '../services/userService'

function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getUser()
        setUser(data)
      } catch (err) {
        setError('Unable to load user information.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return <p className="text-sm text-gray-400">Loading user...</p>
  }

  if (error) {
    return <p className="text-sm text-red-400">{error}</p>
  }

  return (
    <div className="flex items-center gap-3">
      <img
        src={user.image}
        alt="User profile"
        className="h-9 w-9 rounded-full bg-green-500/20"
      />

      <div className="hidden sm:block">
        <p className="text-sm font-semibold text-gray-100">
            Group2
       </p>
       <p className="text-xs text-gray-400">
            Group2@gmail.com
       </p>
      </div>
    </div>
  )
}

export default UserProfile
