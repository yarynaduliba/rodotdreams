// import { expect } from '@playwright/test';
import { test } from '../src/fixtures/atlassian.fixture';

test.describe ('Fixture based test example', { tag: ['@fixture'] }, () => {
    test('has title', async ({ jiraPage }) => {

        await jiraPage.goTo();
        await jiraPage.verifyTitle('For you - Jira');
    });
});

