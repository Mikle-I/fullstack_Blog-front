import axios from "axios";
const insatance = axios.create({
  baseURL: "http://localhost:4444",
});

export default insatance;
