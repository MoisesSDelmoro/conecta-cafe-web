import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiZThiZDgwLWQ5M2MtNDNhMC1iMDk2LTg5MDZhNjY1ZmYxMyIsImlhdCI6MTYzMTM2MzQyOSwiZXhwIjoxNjMxNTM2MjI5fQ.UiyrsBCIvHmlKBB1vt7yE7DqCxrDfWS6ufP3wXNM8Wc";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;