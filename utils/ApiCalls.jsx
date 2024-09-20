import axios from "axios";
import useSWR from "swr";
import { signOut } from "next-auth/react";

const env = process.env.NODE_ENV;
let apiUrl = "http://192.168.1.47:8000/api/";
let authToken = "Bearer Egrasrooter";

if (env === "production") {
  apiUrl = "https://newegrassrooter.maastrixdemo.com/api/";
}

// Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: authToken,
    Accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      signOut();
    }
    return Promise.reject(error);
  }
);

export const PostData = async (url, data, payload, authToken = "Bearer Radhe-radhe") => {
  var formdata = new FormData();
  if (data) {
    Object.entries(data).forEach((entry) => {
      const [key, value] = entry;
      if (Array.isArray(value)) {
        value.forEach((v, index) => {
          if (typeof v === "object" && v instanceof File) {
            formdata.append(`${key}[${index}]`, v);
          } else if (typeof v === "object") {
            Object.entries(v).forEach(([k, val]) => {
              formdata.append(`${key}[${index}][${k}]`, val);
            });
          } else {
            formdata.append(`${key}[${index}]`, v);
          }
        });
      } else {
        formdata.append(key, value);
      }
    });
  }
  if (payload) formdata = payload;
  const result = await axiosInstance.post(url, formdata, {
    headers: {
      Authorization: authToken,
      "Content-Type": "multipart/form-data",
    },
    validateStatus: function (status) {
      return status >= 200 && status < 300;
    },
  });

  return result.data;
};

export const axiosGet = async (url, authenticationToken = authToken) => {
  const result = await axiosInstance.get(url, {
    headers: {
      Authorization: authenticationToken,
    },
  });
  return result.data;
};

export const GetData = (url, shouldFetch = true, token = authToken, dependency) => {
  const config = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  };

  const fetcher = () => axiosGet(url, token);

  return useSWR(shouldFetch ? [url, dependency] : null, fetcher, config);
};