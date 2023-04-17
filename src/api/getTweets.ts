import axios from "axios";

export const getTweets = () => {
  axios.request({
    method: "get",
    baseURL: "http://localhost:8000",
    url: "/tweets",
    data: {},
  });
};
