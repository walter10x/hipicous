import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './module/users/users.module';


@Module({
  imports: [PersonsModule, ConfigModule, UsersModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
