import axios from 'axios'

export function login(body) {
  return axios.post('/api/user/login', body)
}

export function rejister(body) {
  return axios.post('/api/user/rejister', body)
}

export function logout() {
  return axios.get('/api/user/logout')
}
