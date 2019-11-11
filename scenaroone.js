module.exports = {
    'Google\'s Search Functionality' : function (browser) {
      browser
        .url('https://xkcd.com')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .assert.title('xkcd: Recombination And Reionization')
        .useXpath() 
        .click('//*[@id="middleContainer"]/ul[1]/li[3]')
        .url(function(response){
        this.assert.urlContains(response.value, '//*[@id="middleContainer"]/ul[1]/li[3]')
        .verify.elementPresent('//*[@id="middleContainer"]/ul[1]/li[3]') // this verifies that the image changes 
        })

        .end();
    }
  };