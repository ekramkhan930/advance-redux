import axios from "axios";

const url = "https://641b49271f5d999a446025a9.mockapi.io/cartData";
const header = { headers: { "Content-Type": "application/json" } };

export const sendCart = async (payload) => {
  try {
    const response = axios.post(url, payload, header);
    return response.data;
  } catch (error) {
    console.log("error from post", error);
  }
};

export const receivedCart = async () => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    console.log("error from get", error);
  }
};
