import { MenuItem } from "../enums/menu.item";
import { browser } from "../test.helper";

export abstract class BasePage {
    
    async titleShouldBe(title: MenuItem) {
        await browser.findElement("h1.title-ui")
            .then(element => element.shouldHaveText(title));
    }
}