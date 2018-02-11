import axios from 'axios'
import apiurl from './config'

export function publish(body) {
  // return axios.post('/api/action/publish', body)
  return axios({
    method: 'post',
    url: `${apiurl}/action/publish`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: body
  })
}
export function getaction(skip) {
  return axios.get(`${apiurl}/action/getaction/${skip}`)
}
