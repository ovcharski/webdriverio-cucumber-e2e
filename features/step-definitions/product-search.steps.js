const { Given, When, Then, After, Before } = require('@cucumber/cucumber');

const searchField = '#woocommerce-product-search-field-0';

Before(async function() {
    await browser.url('https://ovcharski.com/shop/');
});

After(async function() {
    await browser.deleteCookies();
    await browser.reloadSession();
});

Given('I navigate to the shop page', async function() {
    // Navigation handled in Before hook
});

When('I search for {string}', async function(searchQuery) {
    const searchInput = await $(searchField);
    await searchInput.setValue(searchQuery);
    await browser.keys('Enter');
});

Then('I should see product with SKU {string}', async function (sku) {
    const skuElement = await $(`.sku=${sku}`);
    await skuElement.waitForExist({ timeout: 5000 });
    await expect(skuElement).toBeDisplayed();
});

Then('I should be on product page {string}', async function(url) {
    await browser.waitUntil(
        async () => (await browser.getUrl()) === url,
        {
            timeout: 5000,
            timeoutMsg: `Expected URL to be ${url} but was ${await browser.getUrl()}`
        }
    );
});