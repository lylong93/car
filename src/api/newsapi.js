import axios from 'axios'
import apiurl from './config'

export default function getNews(page, elite) {
  return axios.get(`${apiurl}/news/${page}/${elite}`)
}
