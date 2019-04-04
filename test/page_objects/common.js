/*
  This file empasses the logic for common/reusable methods and selectors this file tends to change
  and is never set in stone.
*/

// Logic for activiating the various blocks.
  function addTextBlock() {
    this.api.pause(2000);
    return this.waitForElementVisible('@textBlockIcon', 7000)
      .click('@textBlockIcon')
  }

  function addPhoneButtonBlock(){
    this.api.pause(2000);
      return this.waitForElementVisible('@phoneButtonIcon', 7000)
        .click('@phoneButtonIcon')
  }


  // Submit Methods
  function submitTextBlock() {
    this.api.pause(2000);
    this.api.frame(null)
    //return this.waitForElementVisible('@submitBlockButton', 7000)
    this.api.click('.btn-save')
  }

  // Other Blocks Methods

  function fillPhoneBlockFieldsAndSubmit() {
    return this.waitForElementVisible("@genericBlockLabel")
      .setValue("@genericBlockLabel", 'Phone Number Yo!')
      .setValue("@phoneNumberField", '01383123456')
      .click(".yo-btn")
  }
  function fillLocationBlockFieldsAndSubmit() {
    return this.waitForElementVisible("@genericBlockLabel")
      .setValue('@genericBlockLabel', 'Find me!')
      .setValue('@latField', '55.9578816')
      .setValue('@longField', '-3.2131496')
      .setValue('@postcodeField', 'KY11 123')
      .click(".yo-btn")
  }

const elements = {
        phoneButtonIcon: {
          selector:' [data-test="add-block-phone-btn"]',
        },
        textBlockIcon: {
            selector:'[data-test="add-block-text-btn"]',
        },
        anchorBlockIcon: {
            selector: '[data-test="add-block-link-btn"]',
        },
        emailBlockIcon: {
          selector: '[data-test="add-block-email-btn"]',
        },
        iFrameMobilePreview: {
          locateStrategy: 'id',
          selector: '#mobile_overview',
        },
        featureBlock: {
          selector: '.custom-page-feature-block'
        },
    };

module.exports = {
  commands: [
    {
      doaddTextBlock: addTextBlock,
      doaddEmailBlockField: addEmailBlockField,
      doaddPhoneButtonBlock: addPhoneButtonBlock,
      doaddAnchorBlockField: addAnchorBlockField,
      doaddAttachmentBlockField: addAttachmentBlockField,
    },
  ],
  elements: [elements],
};