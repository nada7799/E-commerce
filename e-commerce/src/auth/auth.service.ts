import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async requestEmailRegisteration() {}

  async verifyEmailOtp() {}

  async login() {}

  async logout() {}

  async getRefreshToken() {}

  async requestPasswordReset() {}

  async verifyPasswordReset() {}

  async resetPassword() {}
}
