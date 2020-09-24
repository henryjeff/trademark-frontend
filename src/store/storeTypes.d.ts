declare type RootState = {
  Auth: AuthState;
};

declare type AuthState = {
  tokenData:
    | {
        accessToken: string;
        refreshToken: string;
      }
    | undefined;
};

declare type UserState = {
  userId: number;
};
