import { Module } from '@nestjs/common';
import { PlaywrightModule } from 'nestjs-playwright';
import { MenuController } from './menu.controller';
import { MenuRobot } from './menu.robot';

@Module({
    imports: [
        PlaywrightModule.forRoot(
            {
                headless: false,
                channel: 'chrome',
                isGlobal: true,
            }
        )
    ],
    controllers: [MenuController],
    providers: [MenuRobot]
})
export class MenuModule {}
