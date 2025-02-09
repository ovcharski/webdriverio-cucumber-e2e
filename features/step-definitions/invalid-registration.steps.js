const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals');
const RegistrationPage = require('../pageobjects/register.page');
const DataGenerator = require('../utils/DataGenerator');

Given(/^I am on the registration webpage$/, async function () {
  await RegistrationPage.open();
});

When(/^I fill in the registration form with an invalid email$/, async function () {
  const userData = DataGenerator.generateUserData({ email: 'invalid-email' });
  await RegistrationPage.fillRegistrationForm(userData);
});

When(/^I fill in the registration form with an invalid password$/, async function () {
  const userData = DataGenerator.generateUserData({ password: '123' });
  await RegistrationPage.fillRegistrationForm(userData);
});

When(/^I fill in the registration form with an existing username$/, async function () {
  const userData = DataGenerator.generateUserData({ username: 'playwrightuser' });
  await RegistrationPage.fillRegistrationForm(userData);
});

When(/^I click the register button$/, async function () {
  await RegistrationPage.submitForm();
});

Then(/^I should see an error message indicating the email is incorrect$/, async function () {
  const errorMessage = await RegistrationPage.emailError;
  await expect(errorMessage).toBeDisplayed();
  await expect(errorMessage).toHaveTextContaining('The email you entered is incorrect');
});

Then(/^I should see an error message indicating the password is invalid$/, async function () {
  const errorMessage = await RegistrationPage.passwordError;
  await expect(errorMessage).toBeDisplayed();
  await expect(errorMessage).toHaveTextContaining('Your Password must contain at least 8 characters');
});

Then(/^I should see an error message indicating the username already exists$/, async function () {
  const errorMessage = await RegistrationPage.usernameError;
  await expect(errorMessage).toBeDisplayed();
  await expect(errorMessage).toHaveTextContaining('The username you entered is incorrect');
});