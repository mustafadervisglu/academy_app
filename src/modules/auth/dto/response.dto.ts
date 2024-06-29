export class PassResponseDto {
  message?: string;
  success?: boolean;
  error?: string | null;
  status?: number;
}

export class LoginResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  expiresRefreshAt: string;
}

export class logoutResponseDto {
  message?: string;
}
