import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://localhost:3000/');
  await page.locator('list-text').filter({ hasText: 'Features' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Accomodation Fort Portal' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Medical Facilities Fort' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Cuisine Fort Portal offers' }).click();
  const page3 = await page3Promise;
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Tourist Attractions Fort' }).click();
  const page4 = await page4Promise;
});