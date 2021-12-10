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
    REMOTE_BROWSER_ENABLE: bool(),
    BROWSER: str({
        choices: [
            'chrome',
            'firefox',
            'MicrosoftEdge',
            'safari'
        ]
    }),
    BROWSER_VERSION: str(),
    REMOTE_BROWSER_HOST: str(),
    REMOTE_BROWSER_BASE_PATH: str(),
    REMOTE_BROWSER_PORT: port(),
    LOCAL_CHROME_DRIVER_BASE_PATH: str(),
    LOCAL_CHROME_DRIVER_PORT: port(),
    IMPLICIT_WAIT: num(),
    SELENOID_ENABLE_VIDEO: bool(),
    SELENOID_ENABLE_LOGS: bool(),
    SELENOID_ENABLE_VNC: bool()
})