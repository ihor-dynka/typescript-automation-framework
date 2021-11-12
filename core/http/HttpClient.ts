import { expect } from "chai";
import got, { Response } from "got";
import { CONFIG } from "../../config/env.conf";
import { IHttpClient } from "./interfaces/IHttpClient"
import { IHttpClientRequestParameters } from "./interfaces/IHttpClientRequestParameters";

export class HttpClient implements IHttpClient {
    response!: Response<string>;

    async get<T>(parameters: IHttpClientRequestParameters<T>): Promise<void> {
        const { url, requiresToken } = parameters 

        const options = {
            headers: {}
        }

        // if (requiresToken) {
        //     const token = this.getToken()
        //     options.headers.RequestVerificationToken = token
        // }

        this.response = await got.get(url, options);
        console.log(this.response.statusCode)
    }

    async post<T>(parameters: IHttpClientRequestParameters<T>): Promise<void> {
        const { url, payload, requiresToken } = parameters

        const options = {
            headers: {}
        }

        this.response = await got.post(url, options);
        console.log(this.response.statusCode)
    }

    async responseHaveStatusCode(status: number): Promise<void> {
        expect(this.response.statusCode).to.equals(status)
    }

    async responseBodyHasIdAndName() {
        const body = JSON.parse(this.response.body);

        expect(body.id).to.not.be.null;
        expect(body.name).to.not.be.null;
    }

}