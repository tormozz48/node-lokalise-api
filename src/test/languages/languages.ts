import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LocaliseAPI from '../../index';

const SCOPE = 'languages';

describe(`api/${SCOPE}`, () => {
    let localiseAPI;

    beforeEach(() => {
        localiseAPI = new LocaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should return list of system languages', async () => {
            nock(helper.BASE_URL)
                .get('/system/languages')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list-system.json'));

            const result = await localiseAPI.languages.list(null, {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list-system.json'));
        });

        it('should return list of project languages', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/languages')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list-project.json'));

            const result = await localiseAPI.languages.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list-project.json'));
        });
    });

    describe('get', () => {
        it('should return single language', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/languages/567')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await localiseAPI.languages.get('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('create', () => {
        it('should create new language', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/languages',
                    helper.getRequest(SCOPE, 'create.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await localiseAPI.languages
                .create('abcde.12345', helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('update', () => {
        it('should update existed language', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345/languages/567',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await localiseAPI.languages
                .update('abcde.12345', 567, helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });

    describe('delete', () => {
        describe('delete', () => {
            it('should remove language', async () => {
                nock(helper.BASE_URL)
                    .delete('/projects/abcde.12345/languages/567')
                    .reply(200, helper.getResponse(SCOPE, 'delete.json'));

                const result = await localiseAPI.languages.delete('abcde.12345', 567);
                expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
            });
        });
    });
});