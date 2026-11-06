
import axios from 'axios'

const API_URL = 'https://dummyjson.com'

// GET ONE USER (existing function)
export const getUser = async () => {
  const response = await axios.get(`${API_URL}/users/1`)
  return response.data
}

// GET FOUR USERS (new function)
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users?limit=4`)
  return response.data.users
}
