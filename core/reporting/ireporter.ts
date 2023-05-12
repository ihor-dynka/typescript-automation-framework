export interface IReporter {
    step(name: string, action: any): void;
}