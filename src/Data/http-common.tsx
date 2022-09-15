import axios from "axios";

export default axios.create({
  baseURL: "http://api-test.bhut.com.br:3000/api/",
  headers: {
    "Content-type": "application/json",
  },
});
