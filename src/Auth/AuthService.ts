import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from 'src/login/login.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly invigilatorService: LoginService,
    ) {}

  async generateToken(payload: { username: string }): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string): Promise<any> {
   const invigilator = await this.invigilatorService.getOneInvigilator(+username);
    
    if (invigilator.username  && invigilator.password === 'password') {
      return { invigilator}; // Return the user if valid
    }
    return null; // Return null for invalid user
  }
}
