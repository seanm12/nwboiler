/*
  This file empasses the logic for common product navigation methods and selectors.
*/

function browseToUploader() {
    this.api.pause(2000);
    return this.waitForElementVisible('@uploadButtonLink', 7000)
        .click('@uploadButtonLink')
}

const elements = {
    uploadButtonLink: {
            selector: "#open-uploader",
            locateStrategy: 'id'
    },
    exploreButtonLink: {
            selector: "#system",
            locateStrategy: 'id'
    }
};

module.exports = {
  commands: [
    {
      doBrowseToUploader: browseToUploader
    },
  ],
  elements: [elements],
};