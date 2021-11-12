import { remote } from "webdriverio";
import { browserConfig } from "../../config/selenoid/browser.conf";
import { IWebDriver } from "./interfaces/IWebDriver";
import { Browser } from "webdriverio";
import { AsyncElement, WebdriverIoElement } from "./WebdriverIoElement";
import { IWebElement } from "./interfaces/IWebElement";

export declare type AsyncBrowser = Browser<'async'>

export class WebdriverIo implements IWebDriver {
    
    private browser!: AsyncBrowser;

    async setUp(): Promise<void> {
        this.browser =  await remote(browserConfig);
    }

    async tearDown(): Promise<void> {
       await this.browser.deleteSession();
    }

    async open(url: string): Promise<void> {
       await this.browser.url(url)
    }

    async findByCSS(selector: string): Promise<IWebElement> {
        let element:AsyncElement = await this.browser.$(selector);
        return new WebdriverIoElement(element);
    }
}


