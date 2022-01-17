import { WebdriverIo } from '../../core/web/WebdriverIO';

describe('User can', async function () {
    let browser: WebdriverIo;

    beforeEach(async function () {
     browser = new WebdriverIo();

        await browser.setUp();

        await browser.open('https://www.epam.com/');
        const title = await browser.findElement('.title-slider__title');
        title.waitUntilVisible(10000);
        await title.shouldHaveText('Engineering the Future');
    })

    this.afterEach(async function () {
        browser.tearDown();
    })


    it('User can search anything in EPAM website', async function () {
        (await browser.findElement(".header-search__button")).click();
        await (await browser.findElement("#new_form_search")).setValue("Test Automation Engineer");
        const findButton = await browser.findElement("button.header-search__submit");
        await findButton.shouldHaveText("FIND");
        await findButton.click();
        const results = await browser.findElement(".search-results__counter");
        await results.waitUntilVisible(10000);
        await results.shouldHaveText(" results for \"Test Automation Engineer\"".toUpperCase())
    });

    it('User can use "Menu" in EPAM website', async function () {
        await (await browser.findElement("button.hamburger-menu__button")).click();

        await (await browser.findElement("//*[@class='hamburger-menu__link'][text()='Services']")).click();
    });
})
