import {test, expect } from "@playwright/test";

test('has title', async ({page}) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.getByLabel('Search', {exact: true }).fill('Amit Khirodwala');
  await page.getByRole('button',{name: 'Google Search'}).click();
})