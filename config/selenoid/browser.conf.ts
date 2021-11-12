import { CONFIG } from "../env.conf";

export const browserConfig = {
    baseUrl: CONFIG.WEB_BASE_URL,
    path: CONFIG.REMOTE_BROWSER ? '/wd/hub' : '/',
    waitforTimeout: 10000,
    port: CONFIG.REMOTE_BROWSER ? 4444 : 9515,

    capabilities: {
        browserName: CONFIG.BROWSER,
        browserVersion: CONFIG.BROWSER_VERSION,
        "selenoid:options":{
            enableVideo: false,
            enableLog: false,
            enableVNC: false
        }
    }};