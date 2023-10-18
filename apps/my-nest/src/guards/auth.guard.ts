import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService:JwtService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const jwtToken = request.headers.authorization;
    console.log(jwtToken)
    if (!jwtToken) {
      return false;
    }

    try {
      // Verify the JWT token using the JwtService
      const payload = this.jwtService.verify(jwtToken.replace('Bearer ', ''));
      request.user = payload;
      return true;
    } catch (error) {
      return false;
    }
  }

}
