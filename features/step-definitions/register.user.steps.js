const { Given, When, Then } = require('@cucumber/cucumber');
const { browser, $ } = require('@wdio/globals');
const { faker } = require('@faker-js/faker');

// Shared context to store the username
const context = {};

Given('I am on the registration page', async () => {
    await browser.url('https://ovcharski.com/shop/register/');
});

When('I fill in the registration form with valid details', async () => {
    // Generate dynamic values using faker
    const username = faker.internet.userName().toLowerCase();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    // Store the username in the shared context
    context.username = username;

    await $('#user_login-91').setValue(username);
    await $('#first_name-91').setValue(firstName);
    await $('#last_name-91').setValue(lastName);
    await $('#user_email-91').setValue(faker.internet.email());
    await $('#user_password-91').setValue('JirjI*3nf)3jgIJRF');
    await $('#confirm_user_password-91').setValue('JirjI*3nf)3jgIJRF');
    await $('label=Male').click();
    await $('#phone_number-91').setValue('35988484548');
});

When('I submit the form', async () => {
    await $('#um-submit-btn').click();
});

Then('I should be redirected to my profile page', async () => {
    await expect(browser).toHaveUrlContaining(`/shop/user/${context.username}`);
});

Then('I should see a message indicating my profile is empty', async () => {
    const profileMessage = await $('#post-95');
    await expect(profileMessage).toHaveTextContaining('Your profile is looking a little empty. Why not add some information!');
});