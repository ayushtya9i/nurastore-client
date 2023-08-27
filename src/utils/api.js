import axios from "axios";

const params = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = () => {
  return {
    post: (url, data) =>
      axios.post(url, data, {
        baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        },
      }),
  };
};
