import axios from 'axios'
import { baseUrl, accessToken } from './index'
import newVuex from '@/store/'

function fetch(url = '', method = 'get', parmes = {}, AST = false) {
  /**
   * fetchConf 请求配置
   */
  if (AST) {
    parmes.accesstoken = accessToken
  }

  let fetchConf = {
    url: baseUrl + url,
    method
  }

  if (method == 'post') {
    fetchConf.data = parmes
  } else if (method == 'get') {
    // fetchConf.responseType = 'stream'
    let dataStr = '' //数据拼接字符串
    Object.keys(parmes).forEach(key => {
      dataStr += key + '=' + parmes[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      fetchConf.url = fetchConf.url + '?' + dataStr
    }
  }

  axios.interceptors.request.use(
    function(config) {
      //配置发送请求的信息
      newVuex.commit('changeLoading')
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    function(response) {
      //配置请求回来的信息
      newVuex.commit('changeLoading')

      return response
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  return axios(fetchConf)
}

export default fetch
