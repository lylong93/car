import axios from 'axios'
import apiurl from './config'
export function login(body) {
  return axios.post(`${apiurl}/user/login`, body)
}

export function rejister(body) {
  return axios.post(`${apiurl}/user/rejister`, body)
}
console.log('l')
export function logout() {
  return axios.get(`${apiurl}/user/logout`)
}
