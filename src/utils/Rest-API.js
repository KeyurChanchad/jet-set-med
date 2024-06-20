import axios from 'axios'
import config from '../config'

const mainUrl = config.BaseUrl + '/api/v1'

export const api = async (endpoint, data, type, token) => {
    var res
    if (token) {
        token = window.localStorage.getItem('token')
        // console.log(`Token jwt is ${token}`)
    }
    console.log('Main url ', mainUrl+endpoint)

  switch (type) {
    case 'post':
      await axios
        .post(mainUrl + endpoint, data, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`
          }
        })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
        })
      break

    case 'upload':
      await axios
        .post(mainUrl + endpoint, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
             authorization: `${token}`
          }
        })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
        })
      break

    case 'get':
      await axios
        .get(mainUrl + endpoint, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`
          }
        })
        .then(response => {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
          //
        })
      break

    case 'put':
      await axios
        .put(mainUrl + endpoint, data, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `${token}`
          }
        })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
          //
        })
      break

    case 'delete':
      await axios
        .delete(
          mainUrl + endpoint,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`
            }
          },
          { data: data }
        )
        .then(function (response) {
          res = response
        })
        .catch(err => {
          console.log('error of delete case..')
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
        })
      break

    case 'patch':
      await axios
        .patch(
          mainUrl + endpoint,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`
            }
          },
          { data: data }
        )
        .then(function (response) {
          res = response
        })
        .catch(err => {
          console.log('error of patch case..')
          if (err.response.status === 400) {
            res = err.response
          }
          if (err.response.status === 401 || err.response.status === 403 || err.response.status === 503) {
            res = err.response
          }
        })
      break
    default:
      return true
  }
  return res
}

export const checkData =()=> {
  return true
}
