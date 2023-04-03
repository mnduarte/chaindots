import axios from "axios";

export default axios.create({
  //baseURL: process.env.REACT_APP_BASE_URL || "https://restcountries.com/v3.1"
  baseURL: "https://restcountries.com/v3.1"
});
