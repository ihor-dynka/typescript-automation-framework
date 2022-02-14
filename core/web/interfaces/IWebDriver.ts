import { WebdriverIo } from "../webdriverio"
import { IWebElement } from "./iwebelement"
import { IWebElements } from "./iwebelements"

export interface IWebDriver {
  setUp(): Promise<void>;
  tearDown(): Promise<void>;
  open(url: string): Promise<WebdriverIo>;
  maximizeWindow(): Promise<void>;
  findElement(selector: string): Promise<IWebElement>;
  findAllElements(selector: string): Promise<IWebElements>;
}