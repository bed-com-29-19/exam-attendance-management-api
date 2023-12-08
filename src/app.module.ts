/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorModule } from './adminstrator.module';
import { InvigilatorModule } from './invigilator/adminstrator.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdministratorModule,
    InvigilatorModule,
  ],
})
export class AppModule {}
