import { expect } from '@playwright/test';
import { YakabooLoginPage } from 'src/pages/yakaboo.page';
import { test } from 'src/fixures/yakaboo.fixture';

test.describe('Yakaboo login tests', () => {
    test('user can login', async ({ page }) => {
        const yakabooLoginPage = new YakabooLoginPage(page);
        await yakabooLoginPage.login();

        await expect(yakabooLoginPage.profileIcon).toBeVisible();
    });

    test('user can log out', async ({ page}) => {
        const yakabooLoginPage = new YakabooLoginPage(page);
        await yakabooLoginPage.login();
        await yakabooLoginPage.logOut();

        await expect(yakabooLoginPage.loginIcon).toBeVisible();
    });

    test('user cannot login with wrong credentials', async ({ page }) => {
        const yakabooLoginPage = new YakabooLoginPage(page);
        await yakabooLoginPage.loginWithWrongCredentials('ysdbdb@gmail.com', 'sdsdvvv');

        await expect(yakabooLoginPage.loginErrorMessage).toBeVisible();
    });

    test('adding book to shopping card', async ({ page}) => {
        const yakabooLoginPage = new YakabooLoginPage(page);
        await yakabooLoginPage.login();

        const firstBookTitle =  await yakabooLoginPage.addFirstBookToCart();
        const cartBookTitle = await yakabooLoginPage.getCartFirstBookTitle();
        await expect(cartBookTitle).toBe(firstBookTitle);
    });
});
