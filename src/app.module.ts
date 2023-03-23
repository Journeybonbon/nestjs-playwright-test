import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { KumohTimeModule } from './kumoh-time/kumoh-time.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MenuModule,
    KumohTimeModule,
    ConfigModule.forRoot({
      isGlobal: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
