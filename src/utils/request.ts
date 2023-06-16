// 管理网络请求
import axios from "axios";
import { Message } from "@arco-design/web-vue";
// 创建 axios 副本对象
let baseURL = "http://192.168.10.2:3030"; //大洋本地域名
// let baseURL = "http://192.168.10.100:3030";
let request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});
// 默认请求格式
const config = {
  baseURL: "",
  header: {
    "Content-Type": "application/json;charset=UTF-8",
    token: localStorage.getItem("token") || "",
  },
  method: "GET",
  dataType: "json",
  // responseType: "text",
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
export const requestType = async (url, method, data, headers = {}) => {
  try {
    const response = await request.request({
      url,
      method,
      data,
      headers,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// GET 请求方法
export const get = async (url, params, headerType) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    setHeaderType(headerType);
    return requestType(url, "GET", params, { ...config.header });
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
    return requestType(url, "POST", data, { ...config.header });
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
    return requestType(url, "PUT", data, { ...config.header });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// DELETE 请求方法
export const remove = async (url, data) => {
  try {
    url = regularUrl(url) ? url : baseURL + url;
    return requestType(url, "DELETE", data, { ...config.header });
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
      if (response.data.code == 0) {
        return response;
      } else if (response.data.code == -2) {
        //token失效或者未登录
        Message.error({
          content: "请先登录",
          closable: true,
          duration: 2000,
        });
        localStorage.removeItem("token"); //清除缓存的token
        //重定向页面
        setTimeout(() => {
          window.location.href = "/login/index";
        }, 2000);
      } else {
        if (response.data.json.message_zh) {
          Message.error({
            content: response.data.json.message_zh || "",
            closable: true,
            duration: 2000,
          });
        }
        throw response.data;
      }
    } else {
      // 浏览器请求状态失败;
      Message.error({
        content: "网络或服务异常，请稍后重试",
        closable: true,
        duration: 2000,
      });
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 暴露对象
export default request;
