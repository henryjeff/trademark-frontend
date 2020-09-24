declare interface AuthTokenResponseDto {
  access: string;
  refresh: string;
}

declare interface UserCreateRequestDto {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  alpaca_key_id: string;
  alpaca_secret_key: string;
}

declare interface UserResponseDto {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
