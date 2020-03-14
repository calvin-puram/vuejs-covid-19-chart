import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getEvents() {
    try {
      const res = await apiClient.get('/events')
      return res.data
    } catch (error) {
      console.log(error.message)
    }
  },
  async getEvent(id) {
    try {
      const res = await apiClient.get(`/events/${id}`)
      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }
}
