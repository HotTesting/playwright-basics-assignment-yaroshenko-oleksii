import { expect } from "@playwright/test";
import { AppPage } from "../../abstractClasses";
import { Header } from "../../component/header.component";
import { MiniCart } from "../../component/minicart.component";
import { step } from "../../../misc/reporters/step";

export class Wishlist extends AppPage {
    public pagePath = '/dashboard/wishlist'

    public header = new Header(this.page)
    public miniCart = new MiniCart(this.page)

    private heading = this.page.getByRole('heading', { name: 'Your Wishlist' })

    @step()
    async expectLoaded() {
        await expect(this.heading).toBeVisible();
    }

    @step()
    async expectProdact() {
        await expect(this.page.getByRole('link', { name: 'CHERRY TOMATOES $95 Wishlist' })).toBeVisible();
    }
}