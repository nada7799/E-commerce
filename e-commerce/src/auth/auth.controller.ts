import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from 'src/jwt/jwt.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('register')
  async requestRegister() {}

  @Post('verify-email')
  async verifyRegister() {}

  @Post('login')
  async login() {}

  @Post('logout')
  async logout() {}

  @Post('refresh-token')
  async requestRefreshToken() {}

  @Post('password/request-reset')
  async requestResetPassword() {}

  @Post('password/verify-otp')
  async verifyPasswordOtp() {}

  @Post('password/reset')
  async resetPassword() {}
}
