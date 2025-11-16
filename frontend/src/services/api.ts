import axios from "axios";

const URL = import.meta.env.VITE_API_BASE_URL;

const API = {
  async get<T>(route: string): Promise<T> {
    const response = await axios.get<T>(
        URL + '/' + route
      );

    return response.data;
  },

  async post<T>(route: string, bodyData: any) {
    const response = await axios.post<T>(
        URL + '/api/' + route, 
        bodyData,
        {}
    );

    return response.data;
  },
}

export default API