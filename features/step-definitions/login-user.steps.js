const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login-user.page');

// Hardcoded credentials (or load from a config file/environment variables)
const VALID_USERNAME = 'playwrightuser';
const VALID_PASSWORD = 'playwrightuser';
const INVALID_USERNAME = 'playwrightuser99';
const INVALID_PASSWORD = 'playwrightuser88';

Given('I am on the login page', async function () {
    await browser.url('https://ovcharski.com/shop/login/');
});

When('I log in with valid credentials', async function () {
    this.loginPage = new LoginPage();
    await this.loginPage.login(VALID_USERNAME, VALID_PASSWORD);
});

When('I log in with invalid credentials', async function () {
    this.loginPage = new LoginPage();
    await this.loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
});

Then('I should be redirected to the user dashboard', async function () {
    await expect(browser).toHaveTitle('User – Automation Demo Site');
    await expect(browser).toHaveUrl('https://ovcharski.com/shop/user/playwrightuser/');
});

Then('I should see the user profile details', async function () {
    await expect($('h1=Automation User')).toHaveText('Automation User');
});

Then('I should see the user cover photo', async function () {
    await expect($('img[alt="playwrightuser"]')).toBeDisplayed();
    await expect($('img[alt="Automation User"]')).toBeDisplayed();
});

Then('I should remain on the login page', async function () {
    await expect(browser).toHaveTitle('Login – Automation Demo Site');
    await expect(browser).toHaveUrl('https://ovcharski.com/shop/login/');
});

Then('I should see an error message {string}', async function (errorMessage) {
    await expect($('#um-error-for-user_password-92')).toHaveText(errorMessage);
});