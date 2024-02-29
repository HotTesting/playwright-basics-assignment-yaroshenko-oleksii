import { expect } from "@playwright/test";
import { AppPage } from "../abstractClasses";
import { step } from "../../misc/reporters/step";

export class Seller extends AppPage {
    public pagePath = '/sell';

    private fullNameInput = this.page.getByPlaceholder('Your Full Name');
    private emailInput = this.page.getByRole('main').getByPlaceholder('Your Email Address');
    private phoneInput = this.page.getByPlaceholder('Your Phone Number');
    private brandInput = this.page.getByPlaceholder('Your Business Brand');
    private businessDescribeInput = this.page.getByPlaceholder('Please Describe Your Business');
    private submitButton = this.page.getByRole('button', { name: 'Submit' });

    @step()
    async expectLoaded() {
        await expect(this.emailInput, 'Expected SignUp page to be opened').toBeVisible();
    }

    @step()
    async createNewSeller() {
        await this.fullNameInput.fill(`testName+${Date.now()}`)
        await this.emailInput.fill(`test+${Date.now()}@test.com`);
        await this.phoneInput.fill(`${Math.floor(Math.random() * 10000000000)}`);
        await this.brandInput.fill(`brand+${Date.now()}`);
        await this.businessDescribeInput.fill('canned vegetables');
        await this.submitButton.click();
    }

    @step()
    async successPopupSeller() {
        await expect(this.page.getByRole('heading', { name: /^We received your request!/ })).toBeVisible();
    }
}