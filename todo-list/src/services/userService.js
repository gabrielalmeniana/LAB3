
import axios from 'axios'

const API_URL = 'https://dummyjson.com'

export const getUser = async () => {
  const response = await axios.get(`${API_URL}/users/1`)
  return response.data
}
