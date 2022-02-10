import { TEST_CONFIG } from "../../../config/env.conf";
import { IWebElements } from "../../../core/web/interfaces/iwebelements";
import { BasePage } from "./base.page";
import { Menu } from "./menu";

export class HomePage extends BasePage {

    async open(): Promise<HomePage> {
        await this.driver.open(TEST_CONFIG.WEB_BASE_URL)
            .then(_ => this.driver.findElement('.title-slider__title'))
            .then(title => title.waitUntilVisible(10000))
            .then(title => title.shouldHaveText('Engineering the Future'));

        return this;
    }

    async search(text: string): Promise<HomePage> {
        await this.driver.findElement(".header-search__button")
            .then(button => button.click());

        await this.driver.findElement("#new_form_search")
            .then(form => form.setValue(text));

        await this.driver.findElement("button.header-search__submit")
            .then(button => button.shouldHaveText("FIND"))
            .then(button => button.click());

        return this;
    }

    async searchResultShouldContains(text: string): Promise<HomePage> {
        this.driver.findElement(".search-results__counter")
            .then(element => element.waitUntilVisible(10000))
            .then(element => element.shouldHaveText(text.toUpperCase()));

        await this.driver.findAllElements(".search-results__description")
            .then(result => this.shouldContainsAnyOdSearchWord(result, text));

        return this;
    }

    async openMenu() {
        await this.driver.findElement("button.hamburger-menu__button")
            .then(button => button.click());
            
        return new Menu(this.driver);
    }

    private shouldContainsAnyOdSearchWord(searchResult: IWebElements, text: string) {
        text.split(' ')
            .forEach(item => {
                searchResult.eachShouldHaveText(item);
            });
    }
}