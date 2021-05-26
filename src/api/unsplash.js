import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Inz4KHBfkyTcLdK2OC1op-4k5RdkIkQWwIxdtYRy_4E",
  }
});