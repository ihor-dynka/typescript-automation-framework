import chromedriver from 'chromedriver'
import { CONFIG } from '../../config/env.conf';

beforeEach(() => {
    if (!CONFIG.REMOTE_BROWSER) {
        chromedriver.start()
    }
    
})

afterEach(() => {
    if (!CONFIG.REMOTE_BROWSER){
        chromedriver.stop();
    }
})