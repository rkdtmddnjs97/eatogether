import axios from "axios";

export const getBaseURL = () => {
  return "http://localhost:8000/";
};

axios.defaults.baseURL = getBaseURL();
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios;