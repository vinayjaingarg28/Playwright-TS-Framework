import { expect } from "@playwright/test";
import { test } from "../fixture/BaseFixture";

test('checking the login functionality', async ({loginPage}) => {
    await loginPage.navigate('/');
    await expect(loginPage.page).toHaveTitle('OrangeHRM');

    await loginPage.fillDetailAndLogin('Admin','admin123');
    const element = await loginPage.page.getByText('My Actions');
    await expect(element).toBeVisible();

})