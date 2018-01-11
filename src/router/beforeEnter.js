import api from '../api'

export default function(to, from, next) {
  api.Login(to.params)
    .then((data) => {
      console.log(data)
      return data.data.err
    })
    .then((data) => {
      if (data === 0) {
        next()
      }
    })
}
