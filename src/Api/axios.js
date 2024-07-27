import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions

  // baseURL: "http://127.0.0.1:5001/clone-c7d17/us-central1/api",

  // deployed version of amazon server on render.com

  baseURL: "https://amazon-clone-deploy-4ce2.onrender.com",
});

export { axiosInstance };
