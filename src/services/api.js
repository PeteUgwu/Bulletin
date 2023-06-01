import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.response.use(
//   (data) => data,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("todo-token");
//       window.location.href = "/login";
//     }
//     throw error;
//   }
// );
export default api;
