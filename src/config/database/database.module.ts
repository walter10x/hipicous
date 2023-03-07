import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
              type: 'mysql',
              host: process.env.DATABASE_HOST,
              port: Number(process.env.DATABASE_PORT),
              username: process.env.DATABASE_USER,
              password: process.env.DATABASE_PASSWORD,
              database: process.env.DATABASE_NAME,
              entities: [join(__dirname, '../../', '*', '.entity.{ts,js}')],
              synchronize: true,
              autoLoadEntities: true,
            }),
          })
    ]

})
export class DatabaseModule {}
