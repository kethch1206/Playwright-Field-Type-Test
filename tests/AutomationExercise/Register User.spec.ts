import { test, expect } from '@playwright/test';

test('Should sign up successfully when all fields are filled correctly', async ({ page }) => {
  const timestamp = Date.now();
  const email = `Reg${timestamp}@abc.com`;

  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Foobar');
  await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Mrs.').click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('abc');
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('1980');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Foobar');
  await page.getByRole('textbox', { name: 'First name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last name *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('FooCompany');
  await page.getByRole('textbox', { name: 'Company', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('123-456 abc blvd');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).press('Tab');
  await page.getByLabel('Country *').selectOption('Canada');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('ON');
  await page.getByRole('textbox', { name: 'State *' }).press('Tab');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Toronto');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('A1A 1A1');
  await page.locator('#zipcode').press('Tab');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('6471234567');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});

test('Should fail to sign up when the Name field is empty', async ({ page }) => {
  const timestamp = Date.now();
  const email = `Reg${timestamp}@abc.com`;

  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('button', { name: 'Signup' }).click();
  const message = await page
    .locator('input[placeholder="Name"]')
    .evaluate(el => (el as HTMLInputElement).validationMessage);

    expect(message).toBe('Please fill out this field.');  
});

test('Should fail to sign up when the Email Address field is empty', async ({ page }) => {
  const timestamp = Date.now();
  const email = `Reg${timestamp}@abc.com`;

  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Foobar');
  await page.getByRole('button', { name: 'Signup' }).click();

  const message = await page
    .locator('input[data-qa="signup-email"]')
    .evaluate(el => (el as HTMLInputElement).validationMessage);

    expect(message).toBe('Please fill out this field.');  
});