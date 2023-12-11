import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload: { username: string }): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string): Promise<any> {
    // Here you'd validate the user credentials from your database or any other source
    // For demo purposes, let's assume the user is valid if the username and password match
    if (username === 'user' && password === 'password') {
      return { username }; // Return the user if valid
    }
    return null; // Return null for invalid user
  }
}
