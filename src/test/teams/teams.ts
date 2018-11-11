import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LokalizeAPI from '../../index';

const SCOPE = 'teams';

describe(`api/${SCOPE}`, () => {
    let lokalizeAPI;

    beforeEach(() => {
      lokalizeAPI = new LokalizeAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should receive list of all teams', async () => {
            nock(helper.BASE_URL)
                .get('/teams')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokalizeAPI.teams.list({page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });
});