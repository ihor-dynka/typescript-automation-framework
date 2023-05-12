import { IWebElements } from "./interfaces/iwebelements";
import { AsyncElement } from "./webelement";
import  Assertions  from "./../assertions/assertions"

export class WebElements implements IWebElements {

    private elements: Array<AsyncElement>;

    constructor(selector: Array<AsyncElement>) {
        this.elements = selector;
    }

    async eachShouldHaveText(text: string): Promise<void> {
        this.elements.forEach(async element => {
           Assertions.expect(await element.getText()).toContains(text);
        });
    }
}