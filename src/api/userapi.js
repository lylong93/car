import axios from 'axios'

export function login(body) {
  return axios.post('/api/user', {
    body
  })
}

export function logout() {
  return axios.paot('/api/user', {})
}

export function rejister() {
  return axios.paot('/api/user', {})
}
