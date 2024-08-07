import { test, expect } from '@playwright/test';

//Before Running need to do a few things:
//Install playwright extension
//Run both backend and frontend simultaneously 



test('Map Zoom Functionality', async ({ page }) => {
await page.goto('http://localhost:3000/MapPage');
beforeZoom = await page.screenshot();
await page.getByLabel('Zoom in').click();
await page.waitForTimeout(1000);
afterZoom =  await page.screenshot();
expect(beforeZoom).not.toEqual(afterZoom);
beforeZoomOut = await page.screenshot();
await page.getByLabel('Zoom Out').click();
await page.waitForTimeout(1000);
afterZoomOut =  await page.screenshot();
expect(beforeZoomOut).not.toEqual(afterZoomOut);

});


test('Search function- Find POI and display correct information', async ({ page }) => {

  await page.goto('http://localhost:3000/MapPage');

  const searchInput = page.getByPlaceholder('Explore Fort Portal');
  await page.getByPlaceholder('Explore Fort Portal').click();
  await page.getByPlaceholder('Explore Fort Portal').fill('faith');
  await page.getByText('Faith Homes Hotel').click();


  const searchResult = page.locator('text=Faith Homes Hotel');
  await expect(page.getByText('stars Faith Homes HotelFaith')).toBeVisible();
  await expect(page.getByText('Faith homes is a home away')).toBeVisible();
});

test('Map page - Open and close marker info box', async ({ page }) => {
  await page.goto('http://localhost:3000/MapPage');
  const markerButton = page.getByRole('button', { name: 'Marker' }).nth(1);
  await markerButton.click();

  const infoBox = page.locator('.leaflet-popup-content');
  await expect(infoBox).toBeVisible();
  await expect(infoBox).toHaveText('Faith Homes');

  const closeButton = page.locator('.leaflet-popup-close-button');
  await closeButton.click();
  
  await expect(infoBox).not.toBeVisible();
});
