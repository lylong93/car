import newsapi from './newsapi'
import { publish, dd } from './actionapi'
import { login, logout, rejister } from './userapi'
const api = {
  getNews: newsapi,
  Login: login,
  Logout: logout,
  Rejister: rejister,
  Publish: publish,
  dd: dd,
}

export default api
