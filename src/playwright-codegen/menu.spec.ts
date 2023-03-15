import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dorm.kumoh.ac.kr/dorm/restaurant_menu01.do');
  await page.getByRole('link', { name: '푸름관' }).click();
  await page.getByText('금주의 식단 푸름관 오름관1동 오름관3동 식당 메뉴 날짜 검색 2023.03.13 ~ 2023.03.19 식당 메뉴 표 월(03.13) 화(03').click({
    button: 'right'
  });
  await page.getByText('혼합잡곡밥').click({
    button: 'right'
  });
  await page.getByRole('cell', { name: '중식 혼합잡곡밥 감자양파국 아기볼어묵볶음 고추잡채/꽃빵 브로콜리&초장 맛김치' }).getByText('중식').click();
});