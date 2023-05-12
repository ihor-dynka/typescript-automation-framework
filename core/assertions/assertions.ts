import { expect } from "chai";
import { IAssertions } from "./iassertions";

class Assertions implements IAssertions {

    private actualValue!: string;

    expect(actualValue: string): IAssertions {
        this.actualValue = actualValue;
        return this;
    };

    toBeEqual(expectedValue: string): void {
        expect(this.actualValue).to.equal(expectedValue);
    }

    toContains(expectedValue: string): void {
        expect(this.actualValue).to.contains(expectedValue);
    }
}

export default new Assertions();