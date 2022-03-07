import { MenuItem } from "../enums/menu.item";
import { browser } from "../test.helper";
import { BasePage } from "./base.page";

export class Menu extends BasePage {

    async selectItem(menuItem: MenuItem): Promise<Menu> {
        await browser.findElement(`//*[@class='hamburger-menu__link'][contains(text(), '${menuItem}')]`)
            .then(async menu => await menu.click());

        return this;
    }
}