import { Locator, Page } from "@playwright/test";

export class LoginPage{
   readonly userName: Locator
   readonly  password: Locator
   readonly loginButton: Locator
   readonly page: Page

    constructor(page:Page){
        this.page = page
        this.userName = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.loginButton =  page.locator('[data-test="login-button"]')
    }
async login(username: string, password: string){
    await this.userName.fill(username)
    await this.password.fill(password)
    await this.loginButton.click()
}

async navigateToLoginUrl(){
      await this.page.goto(process.env.BASE_URL!);

}
async cmsLogin(){
      await this.page.goto('https://testcms.reco-claims.ca/Login');
        await this.page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('XlgTest-2026!');
        await this.page.getByRole('button', { name: 'Login' }).click();
}

}