import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LocaliseAPI from '../../index';

const SCOPE = 'comments';

describe(`api/${SCOPE}`, () => {
    let localiseAPI;

    beforeEach(() => {
        localiseAPI = new LocaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should return list of all project comments', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/comments')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list-project.json'));

            const result = await localiseAPI.comments.list('abcde.12345', null, {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list-project.json'));
        });

        it('should return list of key comments if key identifier was set', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/keys/567/comments')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list-key.json'));

            const result = await localiseAPI.comments.list('abcde.12345', 567, {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list-key.json'));
        });
    });

    describe('get', () => {
        it('should return comment for given project and key by it identifier', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/keys/567/comments/1234')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await localiseAPI.comments.get('abcde.12345', 567, 1234);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('create', () => {
        it('should create comments for key', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/keys/567/comments',
                    helper.getRequest(SCOPE, 'create.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await localiseAPI.comments
                .create('abcde.12345', 567, helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('delete', () => {
        it('should remove given comment', async () => {
            nock(helper.BASE_URL)
                .delete('/projects/abcde.12345/keys/567/comments/1234')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await localiseAPI.comments.delete('abcde.12345', 567, 1234);
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});
