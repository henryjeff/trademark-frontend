import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class AuthController {
  /**
   * Create user
   */
  static create(
    params: {
      resource: UserCreateRequestDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "auth/new_user";

      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );

      const data = params.resource;

      configs.data = data;

      console.log(configs);
      axios(configs, resolve, reject);
    });
  }

  /**
   * Create user
   */
  static login(
    params: {
      email: string;
      password: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthTokenResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "auth/token/";

      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );

      const data = {
        email: params.email,
        password: params.password,
      };

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
