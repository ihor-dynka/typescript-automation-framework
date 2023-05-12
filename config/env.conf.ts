import { cleanEnv, str, url, port, bool, num } from "envalid";
import path from 'dotenv'

path.config({ path: '.env.' + String(process.env.ENVIRONMENT) })

cleanEnv(process.env, {
    ENVIRONMENT: str({
        choices: [
            'qa',
            'uat'
        ]
    })
})


export const TEST_CONFIG = cleanEnv(process.env, {
    API_BASE_URL: url(),
    WEB_BASE_URL: url(),
    REMOTE_BROWSER_ENABLE: bool({ default: false }),
    BROWSER: str({
        choices: [
            'chrome',
            'firefox',
            'MicrosoftEdge',
            'safari'
        ],
        default: 'chrome'
    }),
    HEADLESS: bool({ default: false }),
    BROWSER_VERSION: str({ default: '98.0' }),
    REMOTE_BROWSER_HOST: str({ default: 'localhost' }),
    REMOTE_BROWSER_BASE_PATH: str({ default: '/wd/hub' }),
    REMOTE_BROWSER_PORT: port({ default: 4444 }),
    LOCAL_CHROME_DRIVER_BASE_PATH: str({ default: '/' }),
    LOCAL_CHROME_DRIVER_PORT: port({ default: 9515 }),
    IMPLICIT_WAIT: num({ default: 10000 }),
    SELENOID_ENABLE_VIDEO: bool({ default: false }),
    SELENOID_ENABLE_LOGS: bool({ default: false }),
    SELENOID_ENABLE_VNC: bool({ default: false })
})