import { browserConfig } from "../../config/browser.conf";
import { Browser, remote } from "webdriverio";
import { WebdriverIoElement } from "./webdriverio.element";
import { WebdriverIoElements } from "./webdriver.elements";
import { IWebElement } from "./interfaces/IWebElement";
import { IWebElements } from "./interfaces/IWebElements";

export declare type AsyncBrowser = Browser<'async'>

export class WebdriverIo implements WebdriverIo {
    private browser!: AsyncBrowser;

    async setUp(): Promise<void> {
        this.browser = await remote(browserConfig);
    }

    async tearDown(): Promise<void> {
        await this.browser.deleteSession();
    }

    async open(url: string): Promise<WebdriverIo> {
        await this.browser.url(url)
        return this;
    }

    async maximizeWindow(): Promise<void> {
        await this.browser.maximizeWindow();
    }

    async findElement(selector: string): Promise<IWebElement> {
        return new WebdriverIoElement(await this.browser.$(selector));
    }

    async findAllElements(selector: string): Promise<IWebElements> {
        return new WebdriverIoElements(await this.browser.$$(selector));
    }
}


