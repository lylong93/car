import newsapi from './newsapi'
import { login, logout, rejister } from './userapi'
const api = {
  getNews: newsapi,
  Login: login,
  Logout: logout,
  Rejister: rejister
}

export default api
