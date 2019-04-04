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

            var dashboard_page = browser.page.dashboard_page();
            dashboard_page
                .doClickEditGroupAppButton()

            var group_app_page = browser.page.group_app_page()

            group_app_page.doActivateAboutPage()
            group_app_page.doaddPhoneButtonBlock()
    
            group_app_page.waitForElementVisible('.custom-page-feature-block', 10000)
            group_app_page.assert.elementPresent(".custom-page-feature-block");
            

        browser.saveScreenshot(conf.imgpath(browser) + 'valid_login_test.png')
        browser.end();
    }
};