/*
  This file empasses the logic for both explore/workspace and SOME surrounding functionality.
*/

const common = require('./common.js')
const nav_common = require('./nav_common.js')
var rn = require('random-number');

var options = {
  min:  1
, max:  10000
, integer: true
}

var group_app_id = rn(options);

function createContainerApplication() {
  this.api.pause(2500);
  return this.waitForElementVisible('@createGroupAppButton', 12000)
    .click('@createGroupAppButton')
}

function activateAboutPage() {
  this.api.pause(2500);
  return this.waitForElementVisible('@aboutButtonSidebar', 12000)
    .click('@aboutButtonSidebar')
}

const commands = {
  doCreateContainerApplication: createContainerApplication,
  doActivateAboutPage: activateAboutPage,
};

Object.assign(commands, common.commands[0], nav_common.commands[0]);

const elements = {
   viewContainerAppHeader: { 
   	  selector: 'body > app > div > application-details > mat-sidenav-container > mat-sidenav-content > div > application-editor > div > div.editor-content > h3'
    },
    aboutButtonSidebar: {
      locateStrategy: 'xpath',
      selector: '/html/body/app/div/application-details/mat-sidenav-container/mat-sidenav/ul/ul/li[3]'
    }
}

Object.assign(elements, common.elements[0], nav_common.elements[0]);

module.exports = {
    commands: [commands],
    elements: [elements],
};