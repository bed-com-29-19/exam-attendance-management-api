/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SwaggerController } from './swagger.controller';
import { LoginModule } from './login/login.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './Auth/AuthService';
import { JwtAuthGuard } from './Auth/AuthGuard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Auth/JwtStrategy';
import {AdministratorService} from './Administrator/administrator.service';
import { AdministratorModule } from './Administrator/administrator.module';
import { AdministratorController } from './Administrator/administrator.controller';
import { GoogleSheetsService } from './google-sheets.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invigilator} from "./login/entities/login.entity"
import { Administrator } from './Administrator/entities/admin.entity';
@Module({
  imports: [
   TypeOrmModule.forFeature([Administrator, Invigilator]), 
    TypeOrmModule.forRoot({
    //  type: 'mysql',
    //  host:'sql11.freesqldatabse.com',
    //    port: 3306,
    //    username:'sql11671945',
    //    password:'XcfnitKhDF',
    //    database:'sql11671945',

      type: 'postgres',
      url: 'postgres://ublvrsdg:EYMciSfc0qP1KphYSlVVQF1CRKQ1-Ct4@flora.db.elephantsql.com/ublvrsdg',
       entities:[ Invigilator, Administrator],
        synchronize: false,
    }), 
    
    PassportModule, AdministratorModule, LoginModule, JwtModule.register({
      secret: 'your-secret', // Replace with your secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
     }),
         
  ],
  
  controllers: [SwaggerController, AdministratorController],
  providers: [AuthService, AdministratorService, JwtStrategy, JwtAuthGuard, GoogleSheetsService],
  exports: [AuthService],
})
export class AppModule {}
