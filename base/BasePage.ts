import { Page } from "@playwright/test";
import 'dotenv/config';

class BasePage{

    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async navigate(url: string, options?: any){
        await this.page.goto(url, options);
        await this.page.waitForLoadState('networkidle');
    }

    async getElementByLocator(locator: string, options?: any){
        return await this.page.locator(locator, options);
    }

    async click(selector: string, options?: any){
        await this.page.waitForSelector(selector);
        await this.page.click(selector, options);
    }

    async fill(selector: string, value: string, options?: any){
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, value, options);
    }
}


export default BasePage;