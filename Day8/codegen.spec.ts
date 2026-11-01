import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('div').filter({ hasText: '✕LoginGet access to your' }).first().click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('iphone');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bestseller Apple iPhone 17 (Black, 256 GB) Add to Compare Apple iPhone 17 (' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Apple iPhone 17 (Black, 256' })).toBeVisible();
  await expect(page1.getByRole('heading')).toContainText('Apple iPhone 17 (Black, 256 GB)');
  await expect(page1.getByRole('textbox', { name: 'Search for Products, Brands' })).toHaveValue('iphone');
  await page1.getByRole('heading', { name: 'Apple iPhone 17 (Black, 256' }).click();
  await expect(page1.locator('#slot-list-container')).toMatchAriaSnapshot(`- text: Key Highlights`);
});