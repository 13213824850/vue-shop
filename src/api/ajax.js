import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行ajax请求
    let promise
    if (type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr != null){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response)
    })
      .catch(function (error) {
        reject(error)
      })
  })
}
