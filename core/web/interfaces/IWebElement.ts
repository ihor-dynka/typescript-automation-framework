export interface IWebElement {
    getText(): Promise<string>;
    shouldHaveText(text: string): Promise<void>;
    click(): Promise<void>;
    setValue(text: string): Promise<void>;
    exists(): Promise<boolean>;
    isDisplayed(): Promise<boolean>;
    isEnabled(): Promise<boolean>;
    waitUntilVisible(duration: number): Promise<void>;
    getAttributeValue(attributeName: string): Promise<string>;
}