export interface IWebElement {
    getText(): Promise<string>;
    shouldHaveText(text: string): Promise<IWebElement>;
    click(): Promise<IWebElement>;
    moveTo(): Promise<void>;
    setValue(text: string): Promise<void>;
    exists(): Promise<boolean>;
    isDisplayed(): Promise<boolean>;
    isEnabled(): Promise<boolean>;
    waitUntilVisible(duration: number): Promise<IWebElement>;
    getAttributeValue(attributeName: string): Promise<string>;
}