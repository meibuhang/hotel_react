import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000"
});

instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("auths");
  const role = localStorage.getItem("role");
  if (token) {
    config.headers["authorization"] = token;
    config.headers["role"] = role;
  }

  return config;
});

export default instance;
