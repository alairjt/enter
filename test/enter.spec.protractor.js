describe('user input', function () {
    beforeEach(function () {
        browser.get('demo/index.html');
    });

    it('Should be with the initial value', function () {
        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('Contador: 0');
    });
    
    it('Should be with the value 1 after one press ente', function () {
        var enterInput = element(by.id('input-enter'));
        enterInput.click();
        
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        var pageTitle = element(by.id('span-result'));

        expect(pageTitle.getText()).toBe('Contador: 1');
    });
    
    it('Should be with the value 4 after four press enter', function () {
        var enterInput = element(by.id('input-enter'));
        enterInput.click();
        
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        var pageTitle = element(by.id('span-result'));
        
        expect(pageTitle.getText()).toBe('Contador: 4');
    });
});