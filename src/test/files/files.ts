import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LocaliseAPI from '../../index';

const SCOPE = 'files';

describe(`api/${SCOPE}`, () => {
    let localiseAPI;

    beforeEach(() => {
      localiseAPI = new LocaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
        it('should return list of files', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/files')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await localiseAPI.files.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('upload', () => {
        it('should upload file', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/files/upload',
                    helper.getRequest(SCOPE, 'upload.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'upload.json'));

            const result = await localiseAPI.files
                .upload('abcde.12345', helper.getRequest(SCOPE, 'upload.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'upload.json'));
        });
    });

    describe('download', () => {
        it('should download file', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/files/download',
                    helper.getRequest(SCOPE, 'download.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'download.json'));

            const result = await localiseAPI.files
                .download('abcde.12345', helper.getRequest(SCOPE, 'download.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'download.json'));
        });
    });
});