  // let apiurl = 'http://where.api.lylong.top' //线上地址
  let apiurl = '/api'

  if (process.env.NODE_ENV === 'development') {
    apiurl = '/api'
  }
  export default apiurl
