import { randomUUID } from 'node:crypto';
import { test } from '@playwright/test';
import { Application } from '../app';
import { SignUp } from '../app/page/signup.page';

test('successful registration of a new user', async ({ page }) => {
  const app = new Application(page);
 
  await app.signUp.open();
  await app.signUp.signUpNewUser();
  // TODO: add success popup appears expectation
});

