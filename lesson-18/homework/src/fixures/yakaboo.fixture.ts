import { test as base, Browser } from '@playwright/test';
import * as fs from 'fs';
import { YakabooLoginPage } from '../pages/yakaboo.page';

interface YakabooFixture {
    yakabooPage: YakabooLoginPage;
}

const storageState = (workerId: number): string =>
    `.auth/yakaboo-storage-${workerId}.json`;

export const test = base.extend<YakabooFixture>({
    yakabooPage: async ({ browser }, use) => {
        const workerId = base.info().workerIndex;

        await authenticateYakaboo(browser, workerId);

        const context = await browser.newContext({
            storageState: storageState(workerId)
        });

        const page = await context.newPage();
        const yakabooPage = new YakabooLoginPage(page);

        await use(yakabooPage);

        await page.close();
        await context.close();
    }
});

async function authenticateYakaboo(browser: Browser, workerId: number): Promise<void> {
    if (fs.existsSync(storageState(workerId))) return;

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new YakabooLoginPage(page);

    await loginPage.login();

    await context.storageState({
        path: storageState(workerId)
    });

    await context.close();
}
