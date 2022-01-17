import { IWebElement } from "./IWebElement";
import { IWebElements } from "./IWebElements";

export interface IWebDriver {
  setUp(): Promise<void>;
  tearDown(): Promise<void>;
  open(url: string): Promise<void>;
  maximizeWindow(): Promise<void>;
  findElement(selector: string): Promise<IWebElement>;
  findAllElements(selector: string): Promise<IWebElements>;
}