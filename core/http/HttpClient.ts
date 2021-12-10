import { expect } from "chai";
import got, { Response } from "got";
import { IHttpClient } from "./interfaces/IHttpClient"
import { IHttpClientRequestParameters } from "./interfaces/IHttpClientRequestParameters";

export class HttpClient implements IHttpClient {
    response!: Response<string>;

    async get<T>(parameters: IHttpClientRequestParameters<T>): Promise<void> {
        const { url } = parameters

        const options = {
            headers: {}
        }

        this.response = await got.get(url, options);
    }

    async post<T>(parameters: IHttpClientRequestParameters<T>) {
        const { url } = parameters

        const options = {
            headers: {}
        }

        this.response = await got.post(url, options);
    }

    async responseHaveStatusCode(status: number) {
        expect(this.response.statusCode).to.equals(status)
    }

    async responseBodyHasIdAndName() {
        const body: any = JSON.parse(this.response.body);

        expect(body.id).to.not.be.null;
        expect(body.name).to.not.be.null;
    }
}