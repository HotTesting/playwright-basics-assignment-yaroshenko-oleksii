import { test } from '@playwright/test';
import { Application } from '../app';

test('successful registration of a new user', async ({ page }) => {
  const app = new Application(page);
 
  await app.signUp.open();
  await app.signUp.signUpNewUser();
  await app.accountDetails.successPopup();
});

