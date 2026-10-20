import { Page } from "@playwright/test";
import { GenericUtils } from '../utils/genericUtils'

export class CommonPage extends GenericUtils {
    page: Page;
    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async navigateViaDashboard(parentMenu: string, childMenu?: string) {
        await this.page.getByText(parentMenu, { exact: true }).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByText(parentMenu, { exact: true }).click()
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu }).click()
        }
    }

   
}