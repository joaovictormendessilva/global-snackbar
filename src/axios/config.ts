import axios, { AxiosError } from "axios";
import { snackBarContextProps } from "../context/SnackBarContext";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

type AxiosNewErrorType = AxiosError & {
  response: {
    data: {
      detail: string;
    };
  };
};

export const setupInterceptors = (snackBarContext: snackBarContextProps) =>
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosNewErrorType) => {
      if (error.response) {
        snackBarContext.showSnackBar(error.response.data.detail);
      }

      return Promise.reject(error);
    }
  );

export default api;
