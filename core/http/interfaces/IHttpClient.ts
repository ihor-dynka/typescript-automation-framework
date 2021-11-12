import { IHttpClientRequestParameters } from "./IHttpClientRequestParameters";

export interface IHttpClient {
    get<T>(parameters: IHttpClientRequestParameters<T>): Promise<void>
    post<T>(parameters: IHttpClientRequestParameters<T>): Promise<void>
    responseHaveStatusCode(status : number): Promise<void>
}