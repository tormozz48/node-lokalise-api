import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import {LokaliseAPI} from '../../index';

const SCOPE = 'keys';

describe(`api/${SCOPE}`, () => {
    let lokaliseAPI;

    beforeEach(() => {
        lokaliseAPI = new LokaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should return list of all project keys', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/keys')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokaliseAPI.keys.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('get', () => {
        it('should return single key', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/keys/567')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await lokaliseAPI.keys.get('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('create', () => {
        it('should create new key', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/keys',
                    helper.getRequest(SCOPE, 'create.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await lokaliseAPI.keys
                .create('abcde.12345', helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('update', () => {
        it('should update existed key', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345/keys/567',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await lokaliseAPI.keys
                .update('abcde.12345', 567, helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });

    describe('updateMany', () => {
        it('should update multiple keys', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345/keys',
                    helper.getRequest(SCOPE, 'update-many.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update-many.json'));

            const result = await lokaliseAPI.keys
                .updateMany('abcde.12345', helper.getRequest(SCOPE, 'update-many.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update-many.json'));
        });
    });

    describe('deleteMany', () => {
        it.skip('should delete multiple keys', async () => {
            nock(helper.BASE_URL)
                .delete(
                    '/projects/abcde.12345/keys',
                    helper.getRequest(SCOPE, 'delete-many.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'delete-many.json'));

            const result = await lokaliseAPI.keys
                .deleteMany('abcde.12345', helper.getRequest(SCOPE, 'delete-many.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete-many.json'));
        });
    });

    describe('delete', () => {
        it('should remove key', async () => {
            nock(helper.BASE_URL)
                .delete('/projects/abcde.12345/keys/567')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await lokaliseAPI.keys.delete('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});