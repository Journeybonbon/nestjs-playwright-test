import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Page } from '@playwright/test';

@Injectable()
export class KumohTimeRobot{
    constructor(
        private configSerivce: ConfigService
    ){}

    run = async (page:Page) => {
        await page.goto(this.configSerivce.get("onestop_url"))
        await page.getByPlaceholder(" 아이디").click()
        await page.getByPlaceholder(" 아이디").fill(this.configSerivce.get("onestop_id"))
        await page.getByPlaceholder(" 비밀번호").click()
        await page.getByPlaceholder(" 비밀번호").fill(this.configSerivce.get("onestop_pw"))
        await page.getByRole("button", {name: "로그인"}).click()
        page.frameLocator("iframe[name=\"LeftFrame\"]").getByRole("cell", {name: "학사관리"}).getByText("학사관리").click()
        page.frameLocator("iframe[name=\"LeftFrame\"]").getByRole("cell", {name: "수강신청"}).getByText("수강신청").click()
        page.frameLocator("iframe[name=\"LeftFrame\"]").getByRole("row", {name: "개설강좌조회"}).getByText("개설강좌조회").click()
        await page.frameLocator("iframe[title=\"개설강좌조회\\(학생\\,교원용\\)\"]").locator("[id=\"Form_버튼\\.pb_조회\"]").click()
        
        // Start waiting for download before clicking. Note no await.
        const downloadPromise = page.waitForEvent('download')
        await page.frameLocator("iframe[title=\"개설강좌조회\\(학생\\,교원용\\)\"]").locator("[id=\"Form_버튼\\.pb_엑셀\"]").click()
        const download = await downloadPromise;
        // Wait for the download process to complete
        console.log(await download.path());
        await download.saveAs('./src/kumoh-time/kumoh-time.xlsx');
        console.log("Done")

        return
    }
}