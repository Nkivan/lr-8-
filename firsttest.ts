import { test, expect } from '@playwright/test';

// 1. Login Test
test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});


// 2. Checkboxes Test
test('Check first checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox = page.locator('input[type="checkbox"]').first();

    await checkbox.check();

    await expect(checkbox).toBeChecked();
});


// 3. Dropdown Test
test('Select option in dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    await page.selectOption('#dropdown', '1');

    await expect(page.locator('#dropdown')).toHaveValue('1');
});


// 4. Add Remove Elements Test
test('Add element and verify delete button appears', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.click('text=Add Element');

    const deleteButton = page.locator('text=Delete');

    await expect(deleteButton).toBeVisible();
});


// 5. JavaScript Alert Test
test('Handle JavaScript alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog => {
        await dialog.accept();
    });

    await page.click('text=Click for JS Alert');

    await expect(page.locator('#result')).toContainText('You successfully clicked an alert');
});