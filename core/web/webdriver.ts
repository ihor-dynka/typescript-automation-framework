import { Browser, remote } from "webdriverio";
import { browserConfig } from "../../config/browser.conf";
import { IWebDriver } from "./interfaces/iwebdriver";

import { IWebElement } from "./interfaces/iwebelement";
import { IWebElements } from "./interfaces/iwebelements";
import { WebElement } from "./webelement";
import { WebElements } from "./webelements";

export declare type AsyncBrowser = Browser<'async'>

export class WebDriver implements IWebDriver {
    private browser!: AsyncBrowser;

    async setUp(): Promise<void> {
        this.browser = await remote(browserConfig);
    }

    async tearDown(): Promise<void> {
        await this.browser.deleteSession();
    }

    async open(url: string): Promise<IWebDriver> {
        await this.browser.url(url)
        return this;
    }

    async maximizeWindow(): Promise<void> {
        await this.browser.maximizeWindow();
    }

    async findElement(selector: string): Promise<IWebElement> {
        return new WebElement(await this.browser.$(selector));
    }

    async findAllElements(selector: string): Promise<IWebElements> {
        return new WebElements(await this.browser.$$(selector));
    }
}


