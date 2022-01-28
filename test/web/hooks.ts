import chromedriver from 'chromedriver'
import { TEST_CONFIG } from '../../config/env.conf';

before(async function ()  {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.start()
    }

})

after(async function ()  {
    if (!TEST_CONFIG.REMOTE_BROWSER_ENABLE) {
        chromedriver.stop();
    }
})