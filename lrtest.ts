import { test, expect } from '@playwright/test';

///////////////////////
// 1️⃣ The Internet Herokuapp
///////////////////////

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Check checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();
  await checkbox.check();

  await expect(checkbox).toBeChecked();
});

///////////////////////
// 2️⃣ Wikipedia
///////////////////////

test('Search for Software testing', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');

  await page.fill('input[name="search"]', 'Software testing');
  await page.press('input[name="search"]', 'Enter');

  await expect(page.locator('#firstHeading')).toContainText('Software testing');
});

///////////////////////
// 3️⃣ Sauce Demo
///////////////////////

test('Login to SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.title')).toHaveText('Products');
});

test('Add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('button:has-text("Add to cart")');

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});