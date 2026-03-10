import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verifyToken } from '@/utils/jwt.util';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Token tidak ditemukan atau format salah',
      );
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);

    if (!payload) {
      throw new UnauthorizedException('Token tidak valid atau kedaluwarsa');
    }

    // Pasang payload ke request agar bisa diakses di controller jika perlu
    request.user = payload;
    return true;
  }
}
