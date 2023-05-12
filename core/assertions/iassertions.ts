export interface IAssertions {
    expect(actualValue: string): IAssertions
    toBeEqual(expectedValue: string): void
    toContains(expectedValue: string): void
}