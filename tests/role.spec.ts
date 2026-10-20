import { test } from '../src/config/fixture'
import { RolePage } from '../src/pages/role'
//import { expect } from '@playwright/test'
//
//import { test, expect } from '@playwright/test';


test.describe('role Page Tests', () => {
    let rolesPage: RolePage
    test.beforeEach(async ({ pageWithLogin }) => {
        rolesPage = new RolePage(pageWithLogin)
    })
    test('verify add application pop up in roles page', async ({ page }) => {
        // await role.navigateViaDashboard('Administrator', 'Users')
        await page.goto('https://testcms.reco-claims.ca/Login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('XlgTest-2026!');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByText('Administrator').click();
        await page.getByRole('link', { name: 'Roles' }).click();
        await page.getByRole('button', { name: 'add_circle_outline Add' }).click();
        await page.locator('input[name="Name"]').click();
        await page.locator('input[name="Name"]').fill('dineshtest');
        await page.getByRole('button', { name: 'save Save' }).click();
        // await role.validateErrorMessage()
    })
    test('verify user creation with valid details', async ({ page }) => {
        // await role.navigateViaDashboard('Administrator', 'Users')
        // await role.createNewUser()
    })

test('verify user can create new role', async ({ page }) => {

        await rolesPage.navigateViaDashboard('Administrator', 'Roles')
       await rolesPage.verifyAddApplication()
       await rolesPage.createNewUser()
    })
})

   