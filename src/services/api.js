import axios from "axios";

const api = axios.create({
  baseURL: "https://hooks.zapier.com/hooks/catch/472009/09rj5z/?"
});

api.interceptors.request.use(async config => {
  config.headers.email_key = `matheus_barbosa5@hotmail.com`;

  return config;
});

api.interceptors.response.use(
  response => {
    console.log("------------------------------------");
    console.log("response", response);
    console.log("------------------------------------");
    const { data } = response;
    return data;
  },
  error => {
    const { response = {} } = error;
    const { data } = response;

    console.log("->", JSON.stringify(data));

    return Promise.reject(error);
  }
);

export default api;
