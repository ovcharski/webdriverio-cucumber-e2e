const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals');
const RegistrationPage = require('../pageobjects/register.page');
const DataGenerator = require('../utils/DataGenerator');

Given('I am on the registration page', async function () {
  await RegistrationPage.open();
});

When('I fill in the registration form with valid details', async function () {
  this.userData = DataGenerator.generateUserData();
  await RegistrationPage.fillRegistrationForm(this.userData);
});

When('I submit the form', async function () {
  await RegistrationPage.submitForm();
});

Then('I should be redirected to my profile page', async function () {
  await expect(browser).toHaveUrlContaining(`/shop/user/${this.userData.username}`);
});

Then('I should see a message indicating my profile is empty', async function () {
  const profileMessage = await $('#post-95');
  await expect(profileMessage).toHaveTextContaining(
    'Your profile is looking a little empty. Why not add some information!'
  );
});