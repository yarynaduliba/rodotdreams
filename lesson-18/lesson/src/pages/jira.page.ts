import { expect, Locator, Page } from '@playwright/test';

export class JiraPage {
    public get userLogo(): Locator {
        return this._page.locator('nav button img');
    }

    public get title(): Locator {
        return this._page.locator('title');
    }

    public get page(): Page {
        return this._page;
    }

    public constructor(private _page: Page) {}

    public async goTo(): Promise<void> {
        await this._page.goto('https://yarynadulibatest.atlassian.net/');
        await this.userLogo.waitFor();
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        // await expect(this.title).toHaveText(expectedTitle);
        await expect(this._page).toHaveTitle(expectedTitle);
    }

}
