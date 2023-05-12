import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const onRequest = (config: AxiosRequestConfig): any => {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_URL_PRODUCTION;
  return {
    ...config,
    baseURL: `${url}`,
    timeout: 500000,
    headers: {
      ...config.headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

const onRequestFormData = (config: AxiosRequestConfig): any => {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_URL_PRODUCTION;
  return {
    ...config,
    baseURL: `${url}`,
    timeout: 500000,
    headers: {
      Accept: "multipart/form-data",
    },
  };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export function http(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}

export function httpFormData(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequestFormData, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}
