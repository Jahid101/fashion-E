import axios from "axios";
import { BASEURL } from "Config/config";

export default axios.create({
  baseURL: `${BASEURL}`,
  headers: {
    "Content-type": "application/json",
  },
});
