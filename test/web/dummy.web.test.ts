import { IWebDriver } from '../../core/web/interfaces/IWebDriver';
import { WebdriverIo } from '../../core/web/WebdriverIO';
import { MenuItem } from './enums/MenuItem';
import { HomePage } from './pages/HomePage';
import { Menu } from './pages/Menu';

describe('User can', async function () {
    const browser: IWebDriver = new WebdriverIo();
    const homePage: HomePage = new HomePage(browser);
    const menu: Menu = new Menu(browser);

    beforeEach(async function () {
        await browser.setUp();
        await homePage.open('https://www.epam.com/');
    })

    afterEach(async function () {
        await browser.tearDown();
    })


    xit('User can search anything in EPAM website', async function () {
        const searchText = "Test Automation Engineer";
        await homePage.search(searchText);
        await homePage.searchResultShouldContains(searchText);
    });

    const menuItems: MenuItem[] = [
        MenuItem.SERVICES,
        MenuItem.HOW_WE_DO_IT,
        MenuItem.OUR_WORK,
        MenuItem.INSIGHTS,
        MenuItem.ABOUT
    ];

    menuItems.forEach((menuItem) => {
        it('User can navigate to ' + menuItem + ' via the "Menu" in EPAM website', async function () {
            await homePage.openMenu()
                .then(menu => menu.selectItem(menuItem));
                // .then(page => page.titleShouldBe(menuItem))
                await menuItem
        });
    });
})
function then(arg0: (page: any) => any) {
    throw new Error('Function not implemented.');
}

