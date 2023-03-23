import { Controller, Get } from '@nestjs/common';
import { InjectBrowser } from 'nestjs-playwright';
import { Browser} from '@playwright/test';
import { KumohTimeRobot } from './kumoh-time.robot';
import { KumohTimeHelper } from './kumoh-time.helper';

@Controller('kumoh-time')
export class KumohTimeController {
    constructor(
        @InjectBrowser() private readonly browser: Browser,
        private kumohTimeRobot: KumohTimeRobot
    ){}

    @Get()
    async getTimeTable() : Promise<any> {
        const browserPage = await this.browser.newPage()
        this.kumohTimeRobot.run(browserPage)
        return "KumohTime"
    }
    
    @Get('xlsx')
    async getExcel() : Promise<any> {
        const helper = new KumohTimeHelper()

        helper.getFile()
        return "Helper"
    }
}
