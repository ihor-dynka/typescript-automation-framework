import chromedriver from 'chromedriver'
import { TEST_CONFIG } from '../../config/env.conf';
import { WebdriverIo } from '../../core/web/webdriverio';

export const browser: WebdriverIo = new WebdriverIo();

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