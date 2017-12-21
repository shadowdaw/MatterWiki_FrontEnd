import fetch from 'dva/fetch';
import { notification } from 'antd';
import history from '../history';
const TOKEN_INVILAD = 'B101';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function errorHandle(response) {
  if (response.code == TOKEN_INVILAD) {
    history.push('/login')
    const error = new Error(response.error.message);
    error.code = TOKEN_INVILAD;
    error.message = response.error.message;
    error.description = '请重新登录';
    throw error;
  }
  return response
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': window.localStorage.getItem('userToken'),
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(errorHandle)
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.message,
          description: error.description,
        });
      } else if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}
