declare type RootState = {
  Auth: AuthState;
  User: UserState;
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
  user: UserResponseDto;
};
