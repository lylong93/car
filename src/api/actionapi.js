import axios from 'axios'
const config = {
  headers: { 'Content-Type': 'multipart/form-data' }
}
export function publish(body) {
  return axios.post('/api/action/publish', body)
}
export function dd(body) {
  console.log(body)
  return axios.post('/api/img', body)
}
