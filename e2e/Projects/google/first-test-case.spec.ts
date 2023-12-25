import {test, expect } from "@playwright/test";

test('Website loaded and searched for Amit Khirodwala', async ({page}) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.getByLabel('Search', {exact: true }).fill('Amit Khirodwala');
  await page.keyboard.press('Enter');
  // await page.getByRole('button',{name: 'Google Search'}).click();
  // await page.getByLabel('Google Search').click();
})