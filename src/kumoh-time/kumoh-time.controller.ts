import { Controller, Get, Query } from '@nestjs/common';
import { InjectBrowser } from 'nestjs-playwright';
import { Browser, chromium } from '@playwright/test';
import { KumohTimeRobot } from './kumoh-time.robot';
import { KumohTimeHelper } from './kumoh-time.helper';
import { RequestTimeDto } from './request-kumoh-time.dto';

@Controller('kumoh-time')
export class KumohTimeController {
    constructor(
        @InjectBrowser() private readonly browser: Browser,
        private kumohTimeRobot: KumohTimeRobot,
        private kumohTimeHelper: KumohTimeHelper
    ){}

    @Get()
    async getTimeTable() : Promise<any> {
        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        this.kumohTimeRobot.run(page)
        return "KumohTime"
    }
    
    @Get('/xlsx')
    async getExcel(@Query() requestDto: RequestTimeDto) : Promise<any> {
        await this.kumohTimeHelper.saveTime(requestDto)
        return "Helper"
    }
}
