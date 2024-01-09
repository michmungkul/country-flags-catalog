import axios from "axios";

const apiUrl = axios.create({

  baseURL: "myurl.com"
});

export default apiUrl;