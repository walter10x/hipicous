import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ModulesModule } from './modules/modules.module';


@Module({
  imports: [ConfigModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
