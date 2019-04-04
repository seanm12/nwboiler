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


function enterValidGroupAppTitle() {
  return this.waitForElementVisible('@groupAppTitleField', 12000)
    .setValue('@groupAppTitleField', 'Container App ' + group_app_id)
}

const commands = {
  doCreateContainerApplication: createContainerApplication,
  doEnterValidGroupAppTitle: enterValidGroupAppTitle,
  doSubmitGroupApp: submitGroupApp,
  doClickEditGroupAppButton: editContainerApplication
};

Object.assign(commands, common.commands[0], nav_common.commands[0]);

const elements = {
   dashboardHeader: { 
   	  locateStategy: 'class',
   	  selector: '.note-container'
    },
    createGroupAppButton:{
      locateStategy:'class',
      selector: '.btn-add-container'
    },
    groupAppTitleField: {
      selector: 'body > app > div > dashboard > div > div > div.col-lg-8 > dashboard-apps-list > modal:nth-child(2) > div > div > div > div.modal-body.clearfix > div > form > div.form-group > input'
    },
    createGroupSubmitButton: {
      locateStategy: 'class',
      selector: '.btn-create-app'
    },
    editGroupAppButton: {
      locateStategy: 'class',
      selector: '.btn-edit'
    }
}

Object.assign(elements, common.elements[0], nav_common.elements[0]);

module.exports = {
    commands: [commands],
    elements: [elements],
};