import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { JwtService } from '@nestjs/jwt';
import { InvigilatorService } from 'src/invigilator/invigilator.service';
import { sign } from 'crypto';
import { AdministratorService } from 'src/administrator/administrator.service';


@Injectable()
export class SignupService {
  create(createSignupDto: CreateSignupDto) {
    return 'This action adds a new signup';
  }
  // findAll() {
  //   return `This action returns all signup`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} signup`;
  // }

  // update(id: number, updateSignupDto: UpdateSignupDto) {
  //   return `This action updates a #${id} signup`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} signup`;
  // }
}

export class Signup {
  constructor(
    private administratorservice: AdministratorService,
    private jwtService: JwtService
  ) {}

  async signIn( username: string, pass: string){
    //const user = await this.administratorservice.findOne(username);
    // if (user?.password !== pass){
    //   throw new UnauthorizedException();
    // }
   // const payload = {sub: user.userId, username: user.username};
    return{
    //  access_token: await this.jwtService.signAsync(payload),
    };
  }
// i have commented those lines out just minimise errors for checking the appp
// since the endpoint are not fully connected thats why these errors pops up
}


