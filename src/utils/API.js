import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=15&nat=us,ca";

export default {
  getEmployees: function() {
    return axios.get(BASEURL);
  }
};
