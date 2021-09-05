import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRiZThiZDgwLWQ5M2MtNDNhMC1iMDk2LTg5MDZhNjY1ZmYxMyIsImlhdCI6MTYzMDg2MTIzOCwiZXhwIjoxNjMxMDM0MDM4fQ.2_gYZeYqvFMGGiY9oRCa4Np1sUdXbK7sXsPvrL-_NfI";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;