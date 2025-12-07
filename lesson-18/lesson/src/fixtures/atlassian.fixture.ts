import { test as base, Browser } from '@playwright/test';
import { JiraPage } from '../pages/jira.page';
import { AtlassianLoginPage } from 'src/pages/atlassian-login.page';
import * as fs from 'fs';

interface AtlassianFixture {
    jiraPage: JiraPage;
}

const storageState = (workedId: number): string => `.auth/storage-state-${workedId}.json`;

export const test = base.extend<AtlassianFixture>({
    jiraPage: async ({ browser }, use) => {
        const workedId = test.info().workerIndex;
        await authenticateJira(browser, workedId);

        const context = await browser.newContext({ storageState: storageState(workedId) });
        const page = await context.newPage();
        const jiraPage = new JiraPage(page);
        await use(jiraPage);

        await page.close();
        await context.close();
    }
});

async function authenticateJira(browser: Browser, workedId: number): Promise<void> {
    if (fs.existsSync(storageState(workedId)))
        return;

    const context = await browser.newContext();
    const page = await context.newPage();
    const atlassianLoginPage = new AtlassianLoginPage(page);
    await atlassianLoginPage.login(workedId);
    await page.context().storageState({ path: storageState(workedId) });
    await context.close();

}
