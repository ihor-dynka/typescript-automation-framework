import { WebdriverIo } from '../../core/web/WebdriverIO';

describe('User can', () => {

    const browser = new WebdriverIo();

    beforeEach(async ()=>{
        await browser.setUp();
    })

    afterEach(async ()=>{
        await browser.tearDown();
    })

    it('open Pet Swagger', async () => {        
        await browser.open("/");
        const title = await browser.findByCSS(".title");
        await title.waitUntilVisible(10000);
        await title.shouldHaveText('Swagger Petstore');

        console.log(process.env.REMOTE_BROWSER_ENABLE);
    });
});


