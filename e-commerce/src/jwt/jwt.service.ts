import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { UserInterface } from 'src/modules/user/interface/user.interface';
import { Response } from 'express';
@Injectable()
export class JwtService {
  constructor(private readonly jwtService: NestJwtService) {}
  async generateAcessToken(user: UserInterface): Promise<any> {
    const id = user._id.toString();
    const payload = { sub: id, email: user.email };
    return this.jwtService.sign(payload, { expiresIn: '7d' });
  }

  async generateRefreshToken(user: UserInterface): Promise<any> {
    const id = user._id.toString();
    const payload = { sub: id, email: user.email };
    return this.jwtService.sign(payload, { expiresIn: '30d' });
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      throw new UnauthorizedException({ message: 'invalid or expired token' });
    }
  }

  async setAuthCookies(
    res: Response,
    accessToken: string,
    refreshToken: string,
  ) {
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 604800000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 24 * 60 * 60 * 1000,
    });
  }
}
