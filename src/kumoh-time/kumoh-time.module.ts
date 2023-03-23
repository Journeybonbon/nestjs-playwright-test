import { Module } from '@nestjs/common';
import { PlaywrightModule } from 'nestjs-playwright';
import { KumohTimeController } from './kumoh-time.controller';
import { KumohTimeHelper } from './kumoh-time.helper';
import { KumohTimeRobot } from './kumoh-time.robot';

@Module({
  imports: [
    PlaywrightModule.forRoot(
      {
        headless: false,
        channel: 'chrome',
        isGlobal: true
      }
    ),
  ],
  providers: [KumohTimeRobot, KumohTimeHelper],
  controllers: [KumohTimeController]
})
export class KumohTimeModule {}
