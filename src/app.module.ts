import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { KumohTimeModule } from './kumoh-time/kumoh-time.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { KumohTime } from './database/kumoh-time.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MenuModule,
    KumohTimeModule,
    // DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "mysql1234",
      database: "typeorm",
      entities: [KumohTime],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
