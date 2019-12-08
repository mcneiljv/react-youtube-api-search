import axios from "axios";

const KEY = "AIzaSyDkkP-X1pmxy7_8cf9K_pcPo9jB0LuhicM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
