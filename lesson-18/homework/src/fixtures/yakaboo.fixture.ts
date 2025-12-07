import { test as base, Page } from '@playwright/test';
import * as fs from 'fs';
import {  YakabooPage } from '../pages/yakaboo.page';

interface Fixtures {
    authenticatedPage: Page;
};

const storageState = (workerId: number): string => `.auth/yakaboo-storage-${workerId}.json`;


export const test = base.extend<Fixtures>({
    authenticatedPage: async ({ browser }, use) => {
        const workerId = test.info().workerIndex;

        if (!fs.existsSync(storageState(workerId))) {
            const ctx = await browser.newContext();
            const page = await ctx.newPage();
            const loginPage = new YakabooPage(page);

            await loginPage.login();

            await ctx.storageState({ path: storageState(workerId) });
            await ctx.close();
        }

        const context = await browser.newContext({
            storageState: storageState(workerId)
        });
        const page = await context.newPage();

        await use(page);

        await page.close();
        await context.close();
    }
});
