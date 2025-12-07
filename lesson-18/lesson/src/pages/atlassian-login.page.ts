import { Locator, Page } from '@playwright/test';
// import { ConfigService } from '../services/config.service';

export class AtlassianLoginPage {
    private readonly _url = 'https://www.atlassian.com/';

    private get signInButton(): Locator {
        return this.page.locator('button[name="sign-in"]').filter({ visible: true });
    }

    private get waitLoadedStateLocator(): Locator {
        return this.loggedInLocator.or(this.signInButton).first();
    }

    // private get waitLoadedStateLocator(): Locator {
    //     return this.page.locator('(//button[@name="sign-in"] | //nav//*[@data-testid="main-container"]/button[1])');
    // }

    private get emailInput(): Locator {
        return this.page.locator('#username-uid1');
    }

    private get continueButton(): Locator {
        return this.page.locator('#login-submit');
    }

    private get passwordInput(): Locator {
        return this.page.locator('#password');
    }

    private get passwordInputInteract(): Locator {
        return this.page.locator('#password');
    }

    private get profileIcon(): Locator {
        return this.page.locator('[data-testid="nav-profile-button--trigger"]');
    }

    private get loginStateLocator(): Locator {
        return this.page.locator('[data-testid="main-container"] button:visible');
    }

    private get loggedInLocator(): Locator {
        return this.page.locator('//*[@data-testid="main-container"]//button').filter({ visible: true });
    }

    public constructor(
        private readonly page: Page
        // private readonly configService: ConfigService
    ) {
        // this._url = this.configService.config.uiConfig.atlassianBaseUrl;
    }

    public async goto(): Promise<void> {
        await this.page.goto(this._url);
        await this.waitLoadedStateLocator.waitFor();
    }

    public async login(workerId: number): Promise<void> {
        await this.goto();
        if (await this.loggedInLocator.isVisible()) {
            return;
        }


        const loginButtons = await this.signInButton.all();
        for (const loginButton of loginButtons) {
            if (await loginButton.isVisible()) {
                await loginButton.click();
                break;
            }
        }
        // await this.goto();


        // await this.signInButton.click();
        await this.emailInput.fill('yarynadulibatest@gmail.com');
        await this.continueButton.click();
        await this.passwordInput;
        await this.passwordInputInteract.fill('Azerty12!!');
        await this.continueButton.click();
        await this.loginStateLocator.waitFor();

        await this.page.context().storageState({ path: `.auth/storage-state-${workerId}.json` });
    }
}
