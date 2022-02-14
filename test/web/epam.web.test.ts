import { MenuItem } from './enums/menu.item';
import { HomePage } from './pages/home.page';

describe('User can', function () {

    const homePage: HomePage = new HomePage();

    const searchTexts: string[] = [
        "Test Automation Engineer"
    ];

    searchTexts.forEach(searchText => {
        it(`User can search ${searchText} in EPAM website`, async function () {
            await homePage.open()
                .then(_ => _.search(searchText))
                .then(_ => _.searchResultShouldContains(searchText))
        });
    })

    const menuItems: MenuItem[] = [
        MenuItem.SERVICES,
        MenuItem.HOW_WE_DO_IT,
        MenuItem.OUR_WORK,
        MenuItem.INSIGHTS,
        MenuItem.ABOUT
    ];

    menuItems.forEach(menuItem => {
        it(`User can navigate to ${menuItem} via the "Menu" in EPAM website`, async function () {
            await homePage.open()
                .then(_ => _.openMenu())
                .then(_ => _.selectItem(menuItem))
                .then(_ => _.titleShouldBe(menuItem))
        });
    });
})

