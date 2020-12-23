import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      // 如果有错误则用notification组件处理。
      notification.error({
        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误<span style="color: red">{status}</span> : {options.url}
          </div>
        ),
        description: statusText
      });
      //   Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。
      // 表示该异步请求操作的结束，返回结果值，不用再判断是否返回了数据。
      return Promise.reject(error);
    });
}

export default request;
