/*
  This file empasses the logic for login methods and selectors.
*/

var loginCommands = {
  doLogin: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@email', 3000)
        .setValue('@email', 'snip@email.com')
        .setValue('@password', 'snip@email.com')
        .click('@submit')
  },

   doIncorrectLogin: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@email', 3000)
        .setValue('@email', 'snip@snip.net')
        .setValue('@password', 'pas')
        .click('@submit')
  }
};

module.exports = {
    commands: [loginCommands],
    url: function(){
        return this.api.launchUrl + '/admin/account/logout';
    },
    elements:
    {
        email: {
            locateStrategy: 'id',
            selector: '#email'
        },
        password: {
            locateStrategy: 'id',
            selector: '#password'
        },
        submit:{
            locateStrategy: 'xpath',
            selector: '//*[@id="loginForm"]/div[3]/div/button'
        },
        errorFlash: {
            selector: "#login-error-message",
            locateStrategy: 'id'
        }
    }


};