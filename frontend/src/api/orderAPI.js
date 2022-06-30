import axios from "./config";

export default {
  getOrders(data) {
    return axios.post("order/order/distanceCount/", data);
  },
};