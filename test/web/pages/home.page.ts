import { TEST_CONFIG } from "../../../config/env.conf";
import { IWebElement } from "../../../core/web/interfaces/iwebelement";
import { IWebElements } from "../../../core/web/interfaces/iwebelements";
import { browser } from "../test.helper";
import { BasePage } from "./base.page";
import { Menu } from "./menu";

export class HomePage extends BasePage {

    private menu: Menu = new Menu();

    async title(): Promise<IWebElement> {
        return await browser.findElement('.title-slider__title');
    }

    async open(): Promise<HomePage> {
        await browser.open(TEST_CONFIG.WEB_BASE_URL);
        await (await this.title()).shouldHaveText('Engineering the Future');

        return this;
    }

    async search(text: string): Promise<HomePage> {
        await browser.findElement(".header-search__button")
            .then(async button => await button.click());

        await browser.findElement("#new_form_search")
            .then(async form => await form.setValue(text));

        await browser.findElement("button.header-search__submit")
            .then(async button => await button.shouldHaveText("FIND"))
            .then(async button => await button.click());

        return this;
    }

    async searchResultShouldContains(text: string): Promise<HomePage> {
        await browser.findElement(".search-results__counter")
            .then(async element => await element.shouldHaveText(text.toUpperCase()));

        await browser.findAllElements(".search-results__description")
            .then(async result => await this.shouldContainsAnyOfSearchWords(result, text));

        return this;
    }

    async openMenu() {
        await browser.findElement("button.hamburger-menu__button")
            .then(async button => await button.click());

        return this.menu;
    }

    private async shouldContainsAnyOfSearchWords(searchResult: IWebElements, text: string): Promise<void> {
        text.split(' ').forEach(async item => {
            await searchResult.eachShouldHaveText(item);
        });
    }
}