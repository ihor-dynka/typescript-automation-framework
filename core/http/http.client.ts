import { expect } from "chai";
import got, { Response } from "got";
import { TEST_CONFIG } from "../../config/env.conf";
import { TestLogger } from "../test.logger";
import { IHttpClient } from "./interfaces/ihttp.client"
import { IRequest } from "./interfaces/irequest";
import { allure } from 'allure-mocha/runtime'

class HttpClient implements IHttpClient {
    response!: Response<string>;

    private instance = got.extend({
        prefixUrl: TEST_CONFIG.API_BASE_URL,
    });

    private testLogger: TestLogger = new TestLogger();

    async get<T>(request: IRequest<T>): Promise<void> {
        const { url } = request

        const options = {
            headers: {}
        }

    
        this.testLogger.info(`GET - ${url} \n ${JSON.stringify(options)}`);
        allure.createStep("GET", (url: any) => `GET - ${url} \n ${JSON.stringify(options)}`)
        

        this.response = await this.instance.get(url);

        this.testLogger.info(`${this.response.statusCode.toString()} ${this.response.statusMessage}}`);
        this.testLogger.info(JSON.parse(this.response.body));
    }

    async post<T>(request: IRequest<T>) {
        const { url } = request

        const options = {
            headers: {}
        }

        this.testLogger.info(`GET - ${url} \n ${JSON.stringify(options)}`);

        this.response = await this.instance.post(url, options);

        this.testLogger.info(`${this.response.statusCode.toString()} ${this.response.statusMessage}}`);
        this.testLogger.info(JSON.parse(this.response.body));
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

export default new HttpClient();