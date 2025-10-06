import axios from "axios";

const api = axios.create({
  baseURL: "https://peliculas-w6nl.onrender.com",
});

export default api;
