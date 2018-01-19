import newsapi from './newsapi'
import { publish, getaction } from './actionapi'
import { login, logout, rejister } from './userapi'

const api = {
  getNews: newsapi,
  Login: login,
  Logout: logout,
  Rejister: rejister,
  Publish: publish,
  Getaction: getaction
}

export default api
