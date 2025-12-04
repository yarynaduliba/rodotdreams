import { Locator, Page } from '@playwright/test';

export class YakabooLoginPage {

    private readonly _url: string = process.env.BASE_URL ?? '';

    public constructor(
        private readonly page: Page
    ) { }

    private get signInButton(): Locator {
        return this.page.locator('//span[@class = "account-text"]');
    }

    private get emailInput(): Locator {
        return this.page.locator('//input[@id= "auth-login"]');
    }

    private get passwordInput(): Locator {
        return this.page.locator('//input[@type= "password"]');
    }

    private get signInSubmitButton(): Locator {
        return this.page.locator('//button[contains(text(), "Увійти")]');
    }

    private get loggedAccountIcon(): Locator {
        return this.page.locator('//span[@class = "ui-btn-profile-text hover"]');
    }

    private get loggedOutButton(): Locator {
        return this.page.locator('//div/span[contains(text(), "Вихід")]');
    }

    private get errorMessage(): Locator {
        return this.page.locator('//div[contains(text(), "Вхід в акаунт не вдався, або ваш акаунт тимчасово заблокований. Будь ласка, зачекайте і спробуйте ще раз пізніше." )]');
    }

    private get PaperBooksCategory(): Locator {
        return this.page.locator('//span[contains(text(), "Паперові книги")]');
    }

    private get HudoznyaLiteratyraCategory(): Locator {
        return this.page.locator('//span[contains(text(), "Художня література")]');
    }

    private get firstBookAddToCartButton(): Locator {
        return this.page.locator('(//button[@data-testid = "addToCart"])[1]');
    }

    private get firstBookTitle(): Locator {
        return this.page.locator('(//div[@class = "category-card-content-wrapper"]/a)[1]');
    }

    private get cartIcon(): Locator {
        return this.page.locator('//div[@class = "compounds"]//button/div[@class= "ui-btn-shopping-cart__icon"]');
    }

    private get cartFirstBookTitleInCart(): Locator {
        return this.page.locator('//div[@class = "product-details"]//a');
    }

    public async goto(): Promise<void> {
        await this.page.goto(this._url);
    }

    public async login(): Promise<void> {
        const userEmail = process.env.TEST_USER ?? '';
        const userPassword = process.env.TEST_PASS ?? '';
        await this.goto();
        await this.signInButton.click();
        await this.emailInput.fill(userEmail);
        await this.passwordInput.fill(userPassword);
        await this.signInSubmitButton.click();
    }

    public get profileIcon(): Locator {
        return this.loggedAccountIcon;
    }

    public get loginIcon(): Locator {
        return this.signInButton;
    }

    public async logOut(): Promise<void> {
        await this.loggedAccountIcon.click();
        await this.loggedOutButton.click();
    }

    public async loginWithWrongCredentials(email: string, password: string): Promise<void> {
        await this.goto();
        await this.signInButton.click();
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInSubmitButton.click();
    }

    public get loginErrorMessage(): Locator {
        return this.errorMessage;
    }

    public async getFirstBookTitle(): Promise<string> {
        return await this.firstBookTitle.innerText();
    }

    public async getCartFirstBookTitle(): Promise<string> {
        return await this.cartFirstBookTitleInCart.innerText();
    }

    public async addFirstBookToCart(): Promise<string> {
        await this.PaperBooksCategory.click();
        await this.HudoznyaLiteratyraCategory.click();
        await this.firstBookTitle.waitFor();
        const title = await this.firstBookTitle.innerText();
        await this.firstBookAddToCartButton.click();

        await this.page.waitForResponse(resp => resp.url().includes('cart') && resp.status() === 200, { timeout: 5000 });

        await this.cartIcon.click();
        await this.cartFirstBookTitleInCart.waitFor({ state: 'visible' });;
        await this.cartFirstBookTitleInCart.isVisible();
        return title;
    }

}
