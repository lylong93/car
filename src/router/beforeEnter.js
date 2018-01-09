import api from '../api'

export default function(to, from, next) {
  api.Login(to.params)
    .then(res => {
      console.log(res)
    })
}
