import { test } from '../src/config/fixture'
import { UsersPage } from '../src/pages/user'
//
//import { test, expect } from '@playwright/test';

test.describe('Users Page Tests', () => {
    let usersPage: UsersPage
    test.beforeEach(async ({ pageWithLogin }) => {
        usersPage = new UsersPage(pageWithLogin)
        // await usersPage.cmsLogin()
    })
    test('verify validation when required fields are empty', async ({ page }) => {
        await usersPage.navigateViaDashboard('Administrator', 'Users')
        await usersPage.validateErrorMessage()
    })
    test('verify user creation with valid details', async ({ page }) => {
        await usersPage.navigateViaDashboard('Administrator', 'Users')
        await usersPage.createNewUser()
    })

})

