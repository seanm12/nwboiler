var conf = require('../../../nightwatch.conf.js');

module.exports = {
    '@tags': ['test123'],
    
    before : function(browser) {
        browser.resizeWindow(1280, 800);
    },

    'Test add group application' : function (browser) {
            var login_page = browser.page.login_page();

            login_page.navigate()
            login_page.doLogin(); 

            var examplePageOne = browser.page.examplePageOne();
            examplePageOne
                .doClickEditGroupAppButton()

            var examplePageTwo = browser.page.examplePageTwo()
            examplePageTwo.doActivateAboutPage()
            examplePageTwo.doaddPhoneButtonBlock()
    
            examplePageTwo.waitForElementVisible('.custom-page-feature-block', 10000)
            examplePageTwo.assert.elementPresent(".custom-page-feature-block");
            

        browser.saveScreenshot(conf.imgpath(browser) + 'valid_login_test.png')
        browser.end();
    }
};