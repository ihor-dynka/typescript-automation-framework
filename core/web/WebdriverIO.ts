import { browserConfig } from "../../config/browser.conf";
import { IWebDriver } from "./interfaces/IWebDriver";
import { Browser, remote } from "webdriverio";
import { AsyncElement, WebdriverIoElement } from "./WebdriverIoElement";
import { IWebElement } from "./interfaces/IWebElement";
import { WebdriverIoElements } from "./WebdriverElements";
import { IWebElements } from "./interfaces/IWebElements";

export declare type AsyncBrowser = Browser<'async'>

export class WebdriverIo implements IWebDriver {
    private browser!: AsyncBrowser;

    async setUp(): Promise<void> {
        this.browser = await remote(browserConfig);
    }

    async tearDown(): Promise<void> {
        await this.browser.deleteSession();
    }

    async open(url: string): Promise<void> {
        await this.browser.url(url)
    }

    async maximizeWindow(): Promise<void> {
        await this.browser.maximizeWindow();
    }

    async findElement(selector: string): Promise<IWebElement> {
        const element = await this.browser.$(selector)
        return new WebdriverIoElement(element);
    }

    async findAllElements(selector: string): Promise<IWebElements> {
        const elements = await this.browser.$$(selector)
        return new WebdriverIoElements(elements);
    }
}


