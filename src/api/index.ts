/** Generate by swagger-axios-codegen */

import axiosStatic, { AxiosInstance } from "axios";
import { encode as base64Encode } from "base-64";

const basePath = "http://127.0.0.1:8000/api/";
// const client_id = "";
// const client_secret = "secret";

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {
  axios: axiosStatic,
};

// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void
): Promise<any> {
  if (serviceOptions.axios) {
    // const {
    //   auth: { tokenData },
    // } = store.getState() as RootState;

    // if (tokenData) {
    //   configs.headers.Authorization = `Bearer ${tokenData.access_token}`;
    // }

    return serviceOptions.axios
      .request(configs)
      .then((res: any) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err: any) => {
        console.log(err.message);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        // Had a token but expired, refresh it and remake intended api call
        // if (
        //   err.response.status === 401 &&
        //   tokenData &&
        //   tokenData.refresh_token
        // ) {
        //   return refreshAccessToken(tokenData.refresh_token).then(() => {
        //     return new Promise(r => setTimeout(r, 500)).then(() =>
        //       axios(configs, resolve, reject),
        //     );
        //   });
        // }
        reject(err);
      });
  } else {
    throw new Error("No axios instance");
  }
}

// const refreshAccessToken = (() => {
//   let currRequest: Promise<any> | null = null;
//   const oneAtATimeRefreshToken = (refreshToken: string) => {
//     if (!currRequest) {
//       console.log('refreshing token!', refreshToken);
//       currRequest = axiosStatic.post(
//         `${basePath}/oauth/token`,
//         encodeForm({
//           grant_type: 'refresh_token',
//           refresh_token: refreshToken,
//         }),
//         {
//           headers: {
//             Authorization: `Basic ${base64Encode(
//               `${client_id}:${client_secret}`,
//             )}`,
//             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//             Accept: 'application/json',
//           },
//         },
//       );
//     }
//     return currRequest
//       .then(res => {
//         store.dispatch(updateAuth(res.data));
//       })
//       .finally(() => (currRequest = null));
//   };
//   return oneAtATimeRefreshToken;
// })();

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any
): IRequestConfig {
  url = basePath + url;
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    "Content-Type": contentType,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  };
  console.log(configs);
  return configs;
}
