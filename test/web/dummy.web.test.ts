import { IWebDriver } from '../../core/web/interfaces/IWebDriver';
import { WebdriverIo } from '../../core/web/WebdriverIO';

describe('User can', async function () {
    let browser: IWebDriver = new WebdriverIo();

    beforeEach(async function () {
        await browser.setUp();

        await browser.open('https://www.epam.com/');
        const title = await browser.findElement('.title-slider__title');
        title.waitUntilVisible(10000);
        await title.shouldHaveText('Engineering the Future');
    })

    afterEach(async function () {
        await browser.tearDown();
    })


    it('User can search anything in EPAM website', async function () {
        await (await browser.findElement(".header-search__button")).click();
        await (await browser.findElement("#new_form_search")).setValue("Test Automation Engineer");
        const findButton = await browser.findElement("button.header-search__submit");
        await findButton.shouldHaveText("FIND");
        await findButton.click();
        const results = await browser.findElement(".search-results__counter");
        await results.waitUntilVisible(10000);
        await results.shouldHaveText(" results for \"Test Automation Engineer\"".toUpperCase())
    });

    const menuItems:string[] = [
        'Services', 
        'How We Do It',
        'Our Work',
        'Insights',
        'About'
    ];

    menuItems.forEach((menuItem) => {
        it('User can navigate to through the "Menu" in EPAM website', async function () {
            await (await browser.findElement("button.hamburger-menu__button")).click();
            await (await browser.findElement("//*[@class='hamburger-menu__link'][text()='" + menuItem + "']")).click();
            await (await browser.findElement("h1.title-ui")).shouldHaveText(menuItem);
        });
    });
})
