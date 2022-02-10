import chromedriver from 'chromedriver'
import { TEST_CONFIG } from '../../config/env.conf';
import { IWebDriver } from '../../core/web/interfaces/iwebdriver';
import { WebdriverIo } from '../../core/web/WebdriverIO';

export const browser: IWebDriver = new WebdriverIo();

before(async function ()  {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.start()
    }
})

beforeEach(async function () {
    await browser.setUp();
})

afterEach(async function () {
    await browser.tearDown();
})

after(async function ()  {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.stop();
    }
})