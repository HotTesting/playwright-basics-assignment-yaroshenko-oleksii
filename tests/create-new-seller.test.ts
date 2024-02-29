import { test } from '@playwright/test';
import { Application } from '../app';

test('successful registration of a new seller', async ({ page }) => {
  const app = new Application(page);
 
  await app.seller.open();
  await app.seller.createNewSeller();
  await app.seller.successPopupSeller()

});