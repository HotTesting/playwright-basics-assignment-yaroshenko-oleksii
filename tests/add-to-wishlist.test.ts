import { test } from '@playwright/test';
import { Application } from '../app';
  
  test('logged in user can buy add product to wishlist', async ({ page }) => {
    const app = new Application(page);
  
    await app.signUp.open();
    await app.signUp.signUpNewUser();

    await app.home.header.openShop();
  
    await app.shop.checkProductDetailsByName('CHERRY TOMATOES');
    await app.shop.clickOnSecondSvgInMain();

    await app.wishList.open();
    await app.wishList.expectLoaded();
    await app.wishList.expectProdact()
  });