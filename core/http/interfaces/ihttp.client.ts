import { IRequest } from "./irequest";

export interface IHttpClient {
    get<T>(parameters: IRequest<T>): Promise<void>
    post<T>(parameters: IRequest<T>): Promise<void>
    responseHaveStatusCode(status: number): Promise<void>
}