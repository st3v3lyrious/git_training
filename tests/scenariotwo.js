module.exports = {
    'Google\'sncf test' : function (browser) {
      browser
        .url('www.oui.sncf')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .assert.title('xkcd: Recombination And Reionization')
        .end();
    }
  };