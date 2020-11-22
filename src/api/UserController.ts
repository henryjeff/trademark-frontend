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





 /**
 * Login user to get our tokens
 */
    static updateUserInfo(
        params: {
            newEmail: string;
            newPassword: string;
            currentPassword: string;
        } = {} as any,
        options: IRequestOptions = {}
    ): Promise<AuthTokenResponseDto> {
        return new Promise((resolve, reject) => {
            const url = "auth/user/";

            const configs: IRequestConfig = getConfigs(
                "patch",
                "application/json",
                url,
                options
            );

            const data = {
                currentPassword: params.currentPassword,
                newEmail: params.newEmail,
                newPassword: params.newPassword,
            };

            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
