import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import {LokaliseAPI} from '../../index';

const SCOPE = 'contributors';

describe(`api/${SCOPE}`, () => {
    let lokaliseAPI;

    beforeEach(() => {
        lokaliseAPI = new LokaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should return list of all contributors', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/contributors')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokaliseAPI.contributors.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('get', () => {
        it('should return single contributor', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/contributors/567')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await lokaliseAPI.contributors.get('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('create', () => {
        it('should create new contributor', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/contributors',
                    helper.getRequest(SCOPE, 'create.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await lokaliseAPI.contributors
                .create('abcde.12345', helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('update', () => {
        it('should update existed contributor', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345/contributors/567',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await lokaliseAPI.contributors
                .update('abcde.12345', 567, helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });

    describe('delete', () => {
        it('should remove contributor', async () => {
            nock(helper.BASE_URL)
                .delete('/projects/abcde.12345/contributors/567')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await lokaliseAPI.contributors.delete('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});