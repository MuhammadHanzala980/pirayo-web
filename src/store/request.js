import axios from "axios";

const baseURL = "https://developer.pirayo.com/";

const api = axios.create({
  baseURL,
});

export const request = async (options, data = null) => {
  try {
    const { headers = null, endpoint, method = "GET" } = options;

    const config = {
      method,
      url: endpoint,
      headers: headers ? headers : null,
      data,
    };
    console.log(config);
    const response = await api(config);

    return response.data;
  } catch (error) {
    throw error;
  }
};
