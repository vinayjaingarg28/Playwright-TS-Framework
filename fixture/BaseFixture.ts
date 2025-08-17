import {test as base} from '@playwright/test';
import BasePage from '../base/BasePage';
import { LoginPage } from '../page/LoginPage';


interface MyFixture {
    basePage: BasePage;
    loginPage: LoginPage;
}


const test = base.extend<MyFixture>({
    basePage: async ({page}, use) => {
        await use(new BasePage(page))
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page))
    },
}); 



export {test};