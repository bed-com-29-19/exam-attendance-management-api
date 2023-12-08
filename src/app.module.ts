import { Module } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { ProviderModule } from './provider.module';

@Module({
  imports: [],
  controllers: [ControllerModule],
  providers: [ProviderModule],
})
export class AppModule {}
