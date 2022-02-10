import { IWebDriver } from "../../../core/web/interfaces/iwebdriver";
import { MenuItem } from "../enums/menu.item";

export abstract class BasePage {

    protected driver: IWebDriver;

    constructor(webdriver: IWebDriver) {
        this.driver = webdriver;
    }

    async titleShouldBe(title: MenuItem) {
        await this.driver.findElement("h1.title-ui")
            .then(element => element.shouldHaveText(title));
    }
}