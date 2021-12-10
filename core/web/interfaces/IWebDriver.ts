import { IWebElement } from "./IWebElement";

export interface IWebDriver {
  setUp(): Promise<void>;
  tearDown(): Promise<void>;
  open(url: string): Promise<void>;
  findByCSS(selector: string): Promise<IWebElement>;
}