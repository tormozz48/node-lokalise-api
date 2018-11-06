import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LocaliseAPI from '../../index';

const SCOPE = 'teams';

describe(`api/${SCOPE}`, () => {
    let localiseAPI;

    beforeEach(() => {
      localiseAPI = new LocaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should receive list of all teams', async () => {
            nock(helper.BASE_URL)
                .get('/teams')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await localiseAPI.teams.list({page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });
});