const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require('geckodriver');

const SCREENSHOT_PATH = "./screenshots/";

// we use a nightwatch.conf.js file so we can include comments and helper functions
nightwatch_config = {
  "src_folders" : ["test/e2e"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "test/page_objects",
  "globals_path" : "",

  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },
  "test_settings": {
    "default": {
      "launch_url" : "url",
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": {
        'browserstack.user': '',
        'browserstack.key': '',
        'browser': 'chrome'
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;