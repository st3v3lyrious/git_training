module.exports = {
  before: function(browser) {
    console.log("Setting up...");
  },


  after: function(browser) {
    browser.end();
    console.log("Closing down...");
  },

  "Demo test Google" : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
  }
}