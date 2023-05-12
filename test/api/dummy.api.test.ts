import { TEST_CONFIG } from '../../config/env.conf';
import { IHttpClient } from '../../core/http/interfaces/ihttp.client'
import { HttpClient } from '../../core/http/http.client'
import { IRequest } from '../../core/http/interfaces/irequest'

describe('Manager can', () => {
    it('get a user details', async () => {
        const httpClient: IHttpClient = new HttpClient();

        const getParameters: IRequest<void> = {
            url: TEST_CONFIG.API_BASE_URL + '/v2/pet/1',
            requiresToken: false
        }

        await httpClient.get(getParameters)
        await httpClient.responseHaveStatusCode(200);
    })
})