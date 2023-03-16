import { Controller, Get } from '@nestjs/common';
import { InjectBrowser } from 'nestjs-playwright';
import { MenuRobot } from './menu.robot';
import { Browser, Page } from '@playwright/test';
import { MenuDto } from './dto/menu.dto';

@Controller('menu')
export class MenuController {
    constructor(
        @InjectBrowser() private readonly browser: Browser
    ){}

    @Get()
    async getPureum() : Promise<any> {
        const browserPage = await this.browser.newPage()
        const robot = new MenuRobot(browserPage)

        const menu = await robot.run();

        return menu;
    }

}
