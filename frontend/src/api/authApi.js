import axios from "./config";
import { tokenConfig } from "./tokenConfig";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  tokenVerify(token) {
    return axios.post("rest-auth/token/verify/", token);
  },
  logout() {
    return axios.post("rest-auth/logout/", tokenConfig());
  },
  getUser(id) {
    return axios.get(`user/get_my_info?user_id=${id}`);
  },
};
