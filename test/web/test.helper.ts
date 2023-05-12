import chromedriver from 'chromedriver'
import { TEST_CONFIG } from '../../config/env.conf';
import { IWebDriver } from '../../core/web/interfaces/iwebdriver';
import { WebDriver } from '../../core/web/webdriver';

export const browser: IWebDriver = new WebDriver();

before(function () {
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

after(function () {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.stop();
    }
})