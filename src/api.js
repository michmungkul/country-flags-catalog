import axios from "axios";

const baseUrl = axios.create({

  baseURL: "https://restcountries.com/v3.1/"
});

export default baseUrl;