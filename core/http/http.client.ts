import { expect } from "chai";
import got, { Response } from "got";
import { TEST_CONFIG } from "../../config/env.conf";
import { IHttpClient } from "./interfaces/ihttp.client"
import { IRequest } from "./interfaces/irequest";

export class HttpClient implements IHttpClient {
   private response!: Response<string>;

    private instance = got.extend({
        prefixUrl: TEST_CONFIG.API_BASE_URL,
    });

    async get<T>(request: IRequest<T>): Promise<void> {
        const { url } = request

        const options = {
            headers: {}
        }

        this.response = await this.instance.get(url);
    }

    async post<T>(request: IRequest<T>) {
        const { url } = request

        const options = {
            headers: {}
        }

        this.response = await this.instance.post(url, options);
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