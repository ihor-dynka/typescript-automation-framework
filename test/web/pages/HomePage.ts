import { IWebDriver } from "../../../core/web/interfaces/IWebDriver";
import { IWebElements } from "../../../core/web/interfaces/IWebElements";
import { Menu } from "./Menu";

export class HomePage {

    private browser: IWebDriver;

    constructor(webdriver: IWebDriver) {
        this.browser = webdriver;
    }

    async open(url: string): Promise<HomePage> {
        await this.browser.open(url);
        const title = await this.browser.findElement('.title-slider__title');
        await title.waitUntilVisible(10000);
        await title.shouldHaveText('Engineering the Future');
        return this;
    }

    async search(text: string) {
        await (await this.browser.findElement(".header-search__button")).click();
        await (await this.browser.findElement("#new_form_search")).setValue(text);
        const findButton = await this.browser.findElement("button.header-search__submit");
        await findButton.shouldHaveText("FIND");
        await findButton.click();
    }

    async searchResultShouldContains(text: string) {
        const results = await this.browser.findElement(".search-results__counter");
        await results.waitUntilVisible(10000);
        await results.shouldHaveText(text.toUpperCase())
        const searchResult = await this.browser.findAllElements(".search-results__description");
        this.shouldContainsAnyOdSearchWord(text, searchResult);
    }

    async openMenu(): Promise<Menu> {
        await (await this.browser.findElement("button.hamburger-menu__button")).click();
        return new Menu(this.browser);
    }

    private shouldContainsAnyOdSearchWord(text: string, searchResult: IWebElements) {
        text.split(' ').forEach(item => {
            searchResult.eachShouldHaveText(item);
        });
    }
}