import { Type } from "typescript";
import { IWebDriver } from "../../../core/web/interfaces/IWebDriver";
import { BasePage } from "./BasePage";
import { ServicesPage } from "./ServicesPage";

export class Menu extends BasePage {

    async selectItem<Type>(menuItem: Type): Promise<Type> {
        await (await (this.browser).findElement("//*[@class='hamburger-menu__link'][text()='" + menuItem + "']")).click();
        return menuItem;
    }
}