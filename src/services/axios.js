import originAxios from "axios";
export default function request(option) {
  return new Promise((resolve, reject) => {
    const instance = originAxios.create({
      baseURL: "http://123.207.32.32:9001/",
      timeout: 10000,
    });
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (err) => {
        console.log(err);
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权的访问";
              break;
            default:
              err.message = "其他错误信息";
          }
        }
        return err;
      }
    );
    instance(option)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
