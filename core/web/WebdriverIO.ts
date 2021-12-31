import { browserConfig } from "../../config/browser.conf";
import { IWebDriver } from "./interfaces/IWebDriver";
import { Browser, remote } from "webdriverio";
import { AsyncElement, WebdriverIoElement } from "./WebdriverIoElement";
import { IWebElement } from "./interfaces/IWebElement";

export declare type AsyncBrowser = Browser<'async'>

export class WebdriverIo implements IWebDriver {

    private browser!: AsyncBrowser;

    async setUp(): Promise<void> {
        this.browser = await remote(browserConfig) as AsyncBrowser;
    }

    async tearDown(): Promise<void> {
        await this.browser.deleteSession();
    }

    async open(url: string): Promise<void> {
        await this.browser.url(url)
    }

    async findByCSS(selector: string): Promise<IWebElement> {
        const element = await this.browser.$(selector) as AsyncElement
        return new WebdriverIoElement(element);
    }

    async findAllByCSS(selector: string): Promise<IWebElement[]> {
        const element = await this.browser.$(selector) as AsyncElement
        return new WebdriverIoElement(element) [];    }
}


