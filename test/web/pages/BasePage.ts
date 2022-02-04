import { IWebDriver } from "../../../core/web/interfaces/IWebDriver";

export abstract class BasePage {

    protected browser: IWebDriver;

    constructor(webdriver: IWebDriver) {
        this.browser = webdriver;
    }

    async titleShouldBe(title: string) {
        await (await this.browser.findElement("h1.title-ui")).shouldHaveText(title);
    }
}