import { MenuItem } from "../enums/menu.item";
import { BasePage } from "./base.page";

export class Menu extends BasePage {

    async selectItem(menuItem: MenuItem): Promise<Menu> {
        await this.driver.findElement(`//*[@class='hamburger-menu__link'][text()='${menuItem}']`)
            .then(menu => menu.click());
            
        return this;
    }
}