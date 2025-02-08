const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the {string}', async function(page) {
    await browser.url('https://en.wikipedia.org/');
});

When('I open a new tab with URL {string}', async function(url) {
    // Store the original window handle for later use
    this.originalWindow = await browser.getWindowHandle();
    
    // Open new tab
    await browser.newWindow(url);
    
    // Store all window handles
    this.allHandles = await browser.getWindowHandles();
});

Then('I should be able to switch between tabs', async function() {
    // Switch to original tab
    await browser.switchToWindow(this.originalWindow);
    await expect(browser).toHaveUrl('https://en.wikipedia.org/wiki/Main_Page');
    
    // Switch to new tab
    const newWindow = this.allHandles.find(handle => handle !== this.originalWindow);
    await browser.switchToWindow(newWindow);
    await expect(browser).toHaveUrl('https://www.mediawiki.org/wiki/MediaWiki');
});

Then('I can close the second tab', async function() {
    // Close current tab
    await browser.closeWindow();
    
    // Switch back to original tab
    await browser.switchToWindow(this.originalWindow);
    await expect(browser).toHaveUrl('https://en.wikipedia.org/wiki/Main_Page');
});