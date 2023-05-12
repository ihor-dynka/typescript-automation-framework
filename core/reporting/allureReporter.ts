import { allure } from "allure-mocha/runtime";
import { IReporter } from "./ireporter";

class AllureReporter implements IReporter {

    step(name: string, action: any): void {
        allure.step(name, action);
    }
}

export default new AllureReporter();