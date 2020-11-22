declare interface AuthTokenResponseDto {
  access: string;
  refresh: string;
}

declare interface AuthTokenRefreshResponseDto {
  access: string;
}

declare interface UserCreateRequestDto {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

declare interface UserResponseDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

declare interface UserUpdateInfoDto {
    password: string;
    new_email: string;
    new_password: string;
}
