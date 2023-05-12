import { step } from "../../../core/decorators/step.decorators";
import { IWebElement } from "../../../core/web/interfaces/iwebelement";
import { MenuItem } from "../enums/menu.item";
import { browser } from "../test.helper";

export abstract class BasePage {

    async title(): Promise<IWebElement> {
        return await browser.findElement("h1.title-ui");
    }

    @step()
    async titleShouldBe(title: MenuItem) {
        await this.title().then(async element => await element.shouldHaveText(title));
    }
}