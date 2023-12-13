/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SwaggerController } from './swagger.controller';
import { LoginModule } from './login/login.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './Auth/AuthService';
import { JwtAuthGuard } from './Auth/AuthGuard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Auth/JwtStrategy';
import {administratorService} from './Administrator/administrator.service';
import { AdministratorModule } from './Administrator/administrator.module';


@Module({
  imports: [ PassportModule, AdministratorModule, LoginModule, JwtModule.register({
      secret: 'your-secret', // Replace with your secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
     }),

         
  ],
  
  controllers: [SwaggerController],
  providers: [AuthService, administratorService, JwtStrategy, JwtAuthGuard],
  exports: [AuthService],
})
export class AppModule {}
