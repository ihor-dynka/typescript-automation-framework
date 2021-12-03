import { TEST_CONFIG } from '../../config/env.conf';
import { HttpClient } from '../../core/http/HttpClient'
import { IHttpClientRequestParameters } from '../../core/http/interfaces/IHttpClientRequestParameters'

describe('Manager can', () => {
    it('get a user details', async () => {
        const httpClient = new HttpClient();

        const getParameters: IHttpClientRequestParameters<void> = {
            url: TEST_CONFIG.API_BASE_URL + '/v2/pet/1',
            requiresToken: false
        }

        await httpClient.get(getParameters)
        await httpClient.responseHaveStatusCode(200);
        await httpClient.responseBodyHasIdAndName();
    })
})