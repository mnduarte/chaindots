import axios from "../utils/axios";

const getCountries = () => axios.get("/all");
const getCountry = (code: string) => axios.get(`/alpha/${code}`);

export default {
  getCountries,
  getCountry,
};
