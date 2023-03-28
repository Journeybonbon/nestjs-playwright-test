import { Controller, Get } from '@nestjs/common';
import { InjectBrowser } from 'nestjs-playwright';
import { MenuRobot } from './menu.robot';
import { Browser, chromium } from '@playwright/test';

@Controller('menu')
export class MenuController {
    constructor(
        @InjectBrowser() private readonly browser: Browser
    ){}

    @Get()
    async getPureum() : Promise<any> {
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        const robot = new MenuRobot(page)

        const menu = await robot.run();

        return menu;
    }

}
