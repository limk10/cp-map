import axios from "axios";
import { getToken } from "~/services/auth";
import { toast } from "react-toastify";

toast.configure();

const api = axios.create({
  baseURL: "https://hooks.zapier.com/hooks/catch/472009/09rj5z/?"
});

api.interceptors.request.use(async config => {
  config.headers.email_key = `matheus_barbosa5@hotmail.com`;

  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    const { response = {} } = error;
    const { data } = response;

    return Promise.reject(error);
  }
);

export default api;
