import { expect } from "chai";
import { IWebElements } from "./interfaces/IWebElements";
import { AsyncElement } from "./webdriverio.element";

export class WebdriverIoElements implements IWebElements {

    private elements: Array<AsyncElement>;

    constructor(selector: Array<AsyncElement>) {
        this.elements = selector;
    }

    async eachShouldHaveText(text: string): Promise<void> {
        this.elements.forEach(element => {
            expect(element.getText()).to.contains(text);
        });
    }
}