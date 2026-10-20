import { expect, Page } from '@playwright/test';
import { CommonPage } from './common';

export class RolePage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }

    async verifyAddApplication(){
     await expect(this.page.locator('[class="rz-heading"]')).toBeVisible()
            await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click();
            await expect(this.page.getByText('Add Application Role')).toBeVisible();
}
async createNewUser(){
     let roleName = `Test${Date.now()}`
            console.log(roleName)
            await this.page.locator('input[name="Name"]').fill(roleName);
            await this.page.getByRole('button', { name: 'save Save' }).click()
}
}