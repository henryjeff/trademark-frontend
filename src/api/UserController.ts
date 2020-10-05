import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class UserController {
  /**
   * Login user to get our tokens
   */
  static get(
    params: {} = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "auth/user";

      const configs: IRequestConfig = getConfigs(
        "get",
        "application/json",
        url,
        options
      );

      const data = {};

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
