import { Locator, Page , expect} from "@playwright/test";
import { CommonPage } from "./common";

export class UsersPage extends CommonPage{
page: Page;
// userEmail: string
constructor(page: Page){
    super(page)
    this.page = page
    // this.userEmail = this.generateUserEmail()
}

async validateErrorMessage(){
    await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click();
    await expect(this.page.getByText('Add Application User')).toBeVisible();
    await this.page.getByRole('button', { name: 'save Save' }).click();
    await expect(this.page.getByText('Email is required')).toBeVisible();
    await expect(this.page.getByText('Name is required')).toBeVisible();
    await expect(this.page.getByText('Password is required', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Confirm Password is required')).toBeVisible();
}

 async generateUserEmail() {
        const randomNum = Math.floor(Math.random() * 1000)
        return `test${randomNum}@gmail.com`
    }
async createNewUser(){
    await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click();
    let userEmail = await this.generateUserEmail()
    console.log(userEmail)
  await this.page.locator('input[name="Email"]').fill(userEmail ?? "");
  await this.page.locator('input[name="UserFullName"]').fill('test123');
  await this. page.locator('[class="rz-dropdown valid rz-state-empty"]').click();
  await this.page.getByRole('option', { name: 'Test_29368913' }).click();
  await this.page.locator('input[name="Password"]').click();
  await this.page.locator('input[name="Password"]').fill('Test@123');
  await this.page.locator('input[name="ConfirmPassword"]').fill('Test@123');
  await this.page.getByRole('button', { name: 'save Save' }).click()
}

async cmsLogin(){
      await this.page.goto('https://testcms.reco-claims.ca/Login');
        await this.page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('XlgTest-2026!');
        await this.page.getByRole('button', { name: 'Login' }).click();
}
}