import { bool, cleanEnv, str, url } from "envalid";

export const CONFIG = cleanEnv(process.env, {
    API_BASE_URL : url (
        {
            default: 'https://petstore.swagger.io',
            desc: 'base url for api tests'
        }
    ),
    WEB_BASE_URL : url (
        {
            default: 'https://petstore.swagger.io',
            desc: 'base usl for web tests'
        }
    ),
    REMOTE_BROWSER : bool (
        {
            default: false,
            desc: 'if remote_browser set true tests will run throug selenoid, otherwise through chromedriver'  
        }
    ),
    BROWSER : str (
        {
            default: 'chrome',
            desc: 'browser name'       
        }
    ),
    BROWSER_VERSION : str (
        {
            default: '95.0',
            desc: 'browser version'       
        }
    )
})