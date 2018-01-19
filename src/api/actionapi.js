import axios from 'axios'

export function publish(body) {
  // return axios.post('/api/action/publish', body)
  return axios({
    method: 'post',
    url: '/api/action/publish',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: body
  })
}
export function getaction(skip) {
  return axios.get(`/api/action/getaction/${skip}`)
}
