import { Module } from '@nestjs/common';
import { PlaywrightModule } from 'nestjs-playwright';
import { KumohTimeController } from './kumoh-time.controller';
import { KumohTimeHelper } from './kumoh-time.helper';
import { KumohTimeRobot } from './kumoh-time.robot';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PlaywrightModule.forRoot(
      {
        headless: true,
        channel: 'chrome',
        isGlobal: true
      }
    ),
  ],
  providers: [KumohTimeRobot, KumohTimeHelper],
  controllers: [KumohTimeController]
})
export class KumohTimeModule {}
