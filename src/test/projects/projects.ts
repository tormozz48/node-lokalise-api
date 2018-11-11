import * as nock from 'nock';
import {expect} from 'chai';
import * as helper from '../helper';
import LokaliseAPI from '../../index';

const SCOPE = 'projects';

describe(`api/${SCOPE}`, () => {
    let lokaliseAPI;

    beforeEach(() => {
      lokaliseAPI = new LokaliseAPI({baseUrl: helper.BASE_URL, token: '1234567890'});
    });

    describe('list', () => {
      it('should return list of all projects', async () => {
            nock(helper.BASE_URL)
                .get('/projects')
                .query({page: 1, limit: 100})
                .reply(200, helper.getResponse(SCOPE, 'list.json'));

            const result = await lokaliseAPI.projects.list({page: 1, limit: 100});
            expect(result).to.eql(helper.getResponse(SCOPE, 'list.json'));
      });
    });

    describe('get', () => {
        it('should return single project', async () => {
            nock(helper.BASE_URL)
                .get('/projects/abcde.12345')
                .reply(200, helper.getResponse(SCOPE, 'get.json'));

            const result = await lokaliseAPI.projects.get('abcde.12345');
            expect(result).to.eql(helper.getResponse(SCOPE, 'get.json'));
        });
    });

    describe('create', () => {
        it('should create new project', async () => {
            nock(helper.BASE_URL)
                .post('/projects', helper.getRequest(SCOPE, 'create.json'))
                .reply(200, helper.getResponse(SCOPE, 'create.json'));

            const result = await lokaliseAPI.projects
                .create(helper.getRequest(SCOPE, 'create.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'create.json'));
        });
    });

    describe('update', () => {
        it('should update existed project', async () => {
            nock(helper.BASE_URL)
                .put(
                    '/projects/abcde.12345',
                    helper.getRequest(SCOPE, 'update.json')
                )
                .reply(200, helper.getResponse(SCOPE, 'update.json'));

            const result = await lokaliseAPI.projects
                .update('abcde.12345', helper.getRequest(SCOPE, 'update.json'));
            expect(result).to.eql(helper.getResponse(SCOPE, 'update.json'));
        });
    });

    describe('empty', () => {
        it('should empty existed project', async () => {
            nock(helper.BASE_URL)
                .put('/projects/abcde.12345/empty', {})
                .reply(200, helper.getResponse(SCOPE, 'empty.json'));

            const result = await lokaliseAPI.projects.empty('abcde.12345');
            expect(result).to.eql(helper.getResponse(SCOPE, 'empty.json'));
        });
    });

    describe('delete', () => {
        it('should remove project', async () => {
            nock(helper.BASE_URL)
                .delete('/projects/abcde.12345')
                .reply(200, helper.getResponse(SCOPE, 'delete.json'));

            const result = await lokaliseAPI.projects.delete('abcde.12345');
            expect(result).to.eql(helper.getResponse(SCOPE, 'delete.json'));
        });
    });
});