import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LokaliseAPI from '../../index';

const SCOPE = 'snapshots';

describe(`api/${SCOPE}`, () => {
    let lokaliseAPI;

    beforeEach(() => {
      lokaliseAPI = new LokaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', async () => {
        it('should receive list of project snapshots', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345/snapshots')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokaliseAPI.snapshots.list('abcde.12345', {page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
        });
    });

    describe('create', async () => {
        it('should create project snapshot', async () => {
            nock(helper.BASE_URL)
                .post(
                    '/projects/abcde.12345/snapshots',
                    helper.getRequest(SCOPE, 'create.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await lokaliseAPI.snapshots
                .create('abcde.12345', helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('restore', async () => {
        it('should restore project from snapshot', async () => {
            nock(helper.BASE_URL)
                .post('/projects/abcde.12345/snapshots/567')
                .reply(200, helper.getResponse(SCOPE, 'restore.json'));

            const result = await lokaliseAPI.snapshots
                .restore('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'restore.json'));
        });
    });

    describe('delete', async () => {
        it('should delete project snapshot', async () => {
            nock(helper.BASE_URL)
                .delete('/projects/abcde.12345/snapshots/567')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await lokaliseAPI.snapshots.delete('abcde.12345', 567);
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});