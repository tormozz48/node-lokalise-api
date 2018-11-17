import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import {LokaliseAPI} from '../../index';

const SCOPE = 'team-users';

describe(`api/${SCOPE}`, () => {
    let lokaliseAPI;

    beforeEach(() => {
      lokaliseAPI = new LokaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should receive list of all team users', async () => {
            nock(helper.BASE_URL)
                .get('/teams/12345/users')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokaliseAPI.teamUsers.list(12345, {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('get', () => {
        it('should receive single team user', async () => {
            nock(helper.BASE_URL)
                .get('/teams/12345/users/567')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await lokaliseAPI.teamUsers.get(12345, 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('update', () => {
        it('should update team user parameters', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/teams/12345/users/567',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await lokaliseAPI.teamUsers
                .update(12345, 567, helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });

    describe('delete', () => {
        it('should remove user from team', async () => {
            nock(helper.BASE_URL)
                .delete('/teams/12345/users/567')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await lokaliseAPI.teamUsers.delete(12345, 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});