// 封装axios请求
import axios from "axios"

// 创建axios对象
var myRequest = axios.create({
  baseURL:""
});

// 设置请求拦截器
myRequest.interceptors.request.use(
  config => {
    // config: 请求头的相关信息
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 设置响应拦截器
myRequest.interceptors.response.use(
  function(response) {
    // 对响应的内容进行过滤处理
    return response.data.data || response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 暴露对象
export default myRequest;