import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000',
  // timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    // config.token =
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const status = error.response.status;
    // if (status >= 500) {
    //   console.log('服务繁忙请稍后再试');
    // } else if (status >= 400) {
    //   console.log(error.response.data.message);
    // }
    // console.dir(error);
    return Promise.reject(error);
  },
);

//post
export function post(url, data) {
  return request.post(url, data);
}

export function get(url) {
  return request.get(url);
}

export default request;