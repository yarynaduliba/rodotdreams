import { test, expect } from '@playwright/test';
import { AtlassianLoginPage } from '../src/pages/atlassian-login.page';

test.describe('simple pom example', () => {
    test('has title', async ({ page}) => {
        const atlassianLoginPage = new AtlassianLoginPage(page);
        await atlassianLoginPage.login(test.info().workerIndex);

        await expect(page).toHaveTitle('Atlassian Home');
    });

});

