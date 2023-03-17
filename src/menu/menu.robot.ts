
import { Page } from '@playwright/test';
import { MenuDto } from 'src/menu/dto/menu.dto';

export class MenuRobot {

    constructor(
        private readonly page: Page
    ){}
    run = async () => {
        await this.page.goto('https://dorm.kumoh.ac.kr/dorm/restaurant_menu01.do');
        // li[1] : 푸름관, li[2] : 오름1, li[3] : 오름3
        const dorm_list = ['li[1]/a', 'li[2]/a', 'li[3]/a']
        var menu_list :Array<MenuDto> = [];
        for (var li of dorm_list) {
            await this.page.locator('//html/body/div[1]/div[5]/div[2]/div[2]/ul/'+ li).click();
            const dorm = await this.page.locator('//html/body/div[1]/div[5]/div[2]/div[2]/ul/'+ li).innerText();
            console.log(dorm)

            for (var i = 1; i <= 7; i++){
                const date = await this.page.locator('//*[@id="jwxe_main_content"]/div/div/div/div/table/thead/tr/th['+ i + ']').innerText();
                var lunch = await this.page.locator('//*[@id="jwxe_main_content"]/div/div/div/div/table/tbody/tr[1]/td[' + i + ']').innerText();
                var dinner = await this.page.locator('//*[@id="jwxe_main_content"]/div/div/div/div/table/tbody/tr[2]/td[' + i +']').innerText();
                
                lunch = lunch.replace(/\n/g, " ");
                dinner = dinner.replace(/\n/g, " ")
                
                const data = new MenuDto()
                data.dorm = dorm
                data.date = date
                data.lunch = lunch
                data.dinner = dinner

                menu_list.push(data)

                console.log(date)
                console.log(lunch)
                console.log(dinner)
            }
        }
        
        // menu_list 객체 반환
        return menu_list
    }


}