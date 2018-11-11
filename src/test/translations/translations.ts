import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LokalizeAPI from '../../index';

const SCOPE = 'translations';

describe(`api/${SCOPE}`, () => {
    let lokalizeAPI;

    beforeEach(() => {
        lokalizeAPI = new LokalizeAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should receive list of all translations', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/translations')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokalizeAPI.translations.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('get', () => {
        it('should receive single translation', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/translations/567')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await lokalizeAPI.translations.get('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('update', () => {
        it('should update translation', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345/translations/567',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await lokalizeAPI.translations
                .update('abcde.12345', 567, helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });
});