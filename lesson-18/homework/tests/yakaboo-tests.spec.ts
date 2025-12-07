import { expect } from '@playwright/test';
import { YakabooPage } from 'src/pages/yakaboo.page';
// import { test } from 'src/fixtures/yakaboo.fixture';
import { test } from '../src/fixtures/yakaboo.fixture';

test.describe('Yakaboo login tests', () => {
    test('user can login', async ({ page }) => {
        const yakabooPage = new YakabooPage(page);
        await yakabooPage.login();

        await expect(yakabooPage.profileIcon).toBeVisible();
    });

    test('user can log out', async ({ page}) => {
        const yakabooPage = new YakabooPage(page);
        await yakabooPage.login();
        await yakabooPage.logOut();

        await expect(yakabooPage.loginIcon).toBeVisible();
    });

    test('user cannot login with wrong credentials', async ({ page }) => {
        const yakabooPage = new YakabooPage(page);
        await yakabooPage.loginWithWrongCredentials('ysdbdb@gmail.com', 'sdsdvvv');

        await expect(yakabooPage.loginErrorMessage).toBeVisible();
    });

    test('adding book to shopping card', async ({ page}) => {
        const yakabooPage = new YakabooPage(page);
        await yakabooPage.login();

        const firstBookTitle =  await yakabooPage.addFirstBookToCart();
        const cartBookTitle = await yakabooPage.getCartFirstBookTitle();
        await expect(cartBookTitle).toBe(firstBookTitle);
    });
});
