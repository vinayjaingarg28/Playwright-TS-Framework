import { Page } from "@playwright/test";
import BasePage from "../base/BasePage";

export class LoginPage extends BasePage{
    userNameLocator = '[name="username"]';
    passwordLocator = '[name="password"]';
    loginButtonLocator = '.orangehrm-login-button';

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async fillDetailAndLogin(userName: string, password: string){
        await this.fill(this.userNameLocator, userName);
        await this.fill(this.passwordLocator, password);
        await this.click(this.loginButtonLocator);
    }

}