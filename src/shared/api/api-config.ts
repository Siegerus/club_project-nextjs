import axios, { AxiosError, AxiosInstance } from "axios";

import { requestTimeout } from "@/shared/lib/constants";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: requestTimeout,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response || error.request) {
        console.log(error);
      }

      throw error;
    },
  );

  return api;
};

export default createAPI;
