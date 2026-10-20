import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login';


test.describe('login fun', () => {
  let login: LoginPage
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page)
    await login.navigateToLoginUrl()
  })

  test('valid login', async ({ page }) => {
    await login.login(process.env.USERNAME!, process.env.PASSWORD!)
    await expect(page.getByText('Swag Labs')).toBeVisible();
  });

  test('valid login as problem user', async ({ page }) => {
    await login.login("problem_user", process.env.PASSWORD!)
    await expect(page.getByText('Swag Labs')).toBeVisible();
  });
})



// test('has title', async ({ page }) => {
//   await page.goto(process.env.BASE_URL!);
//   await page.locator('[data-test="username"]').fill(process.env.USERNAME!);
//   await page.locator('[data-test="password"]').fill(process.env.PASSWORD!);
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.getByText('Swag Labs')).toBeVisible();
// });

// test('has title', async ({ page }) => {
//   await page.goto(process.env.BASE_URL!);
//   await page.locator('[data-test="username"]').fill(process.env.USERNAME!);
//   await page.locator('[data-test="password"]').fill(process.env.PASSWORD!);
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.getByText('Swag Labs')).toBeVisible();
// });