import axios from 'axios'

export default function getNews(page, elite) {
  return axios.get(`/api/api/news/${page}/${elite}`)
}
