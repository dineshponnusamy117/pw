import {test as baseTest , Page} from '@playwright/test'
import { LoginPage } from '../pages/login'
import { LoginFixture } from '../types/types'

export const test = baseTest.extend<LoginFixture>({
    pageWithLogin: async({page}, use)=>{
        const loginpage = new LoginPage(page)
        await loginpage.cmsLogin()
        await use(page)
    }
})