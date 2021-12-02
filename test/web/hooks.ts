import chromedriver from 'chromedriver'
import { TEST_CONFIG } from '../../config/env.conf';

beforeEach(() => {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.start()
    }

})

afterEach(() => {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.stop();
    }
})