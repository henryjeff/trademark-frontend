declare interface AuthTokenResponseDto {
  access: string;
  refresh: string;
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
