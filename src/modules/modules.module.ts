import { PersonsModule } from './persons/persons.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PersonsModule]
})
export class ModulesModule {}
