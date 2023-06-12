// 管理网络请求
import axios from "axios";
// 创建 axios 副本对象
let baseURL = "https://wx.modengjl.com";
let request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
// 默认请求格式
const config = {
  header: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  method: "GET",
  dataType: "json",
  responseType: "text",
};

// 设置header的Content-Type类型
const setHeaderType = (type: number) => {
  if (type === 1) {
    config.header["Content-Type"] = "application/json;charset=UTF-8";
  } else if (type === 2) {
    config.header["Content-Type"] = "application/x-www-form-urlencoded";
  } else if (type === 3) {
    config.header["Content-Type"] = "multipart/form-data";
  }
};

//正则匹配请求路径的域名
const regularUrl = (url: string) => {
  return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
};
// 封装请求格式
export const requestType = async (
  url: any,
  method: string,
  data: any,
  headers = {}
) => {
  try {
    const response = await request.request({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// GET 请求方法
export const get = async (url, params, headerType) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    setHeaderType(headerType);
    return requestType(url, "GET", params, config.header);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// POST 请求方法
export const post = async (url, data, headerType) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    setHeaderType(headerType);
    return requestType(url, "POST", data, config.header);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// PUT 请求方法
export const put = async (url, data, headerType) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    setHeaderType(headerType);
    return requestType(url, "PUT", data, config.header);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE 请求方法
export const remove = async (url, data) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    return requestType(url, "DELETE", data, config.header);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 设置请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 设置响应拦截器

request.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      if (response.data.code == 200) {
        return response.data;
      } else {
        // 接口请求失败
      }
    } else {
      // 浏览器请求状态失败;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 暴露对象
export default request;
