
import {expect} from 'chai';
import * as got from 'got';
import * as sinon from 'sinon';
import LocaliseAPI from '../../index';

describe('api/comments', () => {
    const sandbox = sinon.createSandbox();
    let localiseAPI;

    beforeEach(() => {
      sandbox.stub(got, 'get');
      sandbox.stub(got, 'post');
      sandbox.stub(got, 'delete');

      localiseAPI = new LocaliseAPI({token: '1234567890'});
    });

    afterEach(() => {
      sandbox.restore();
    });

    describe('list', () => {
      it('should return list of all project comments', async () => {
        got.get
          .withArgs(sinon.match('/projects/some-project/comments'))
          .resolves({body: {foo: 'bar'}});

        const result = await localiseAPI.comments.list('some-project');

        expect(result).to.eql({foo: 'bar'});
      });

      it('should return list of key comments if key identifier was set', async () => {

      });
    });

    describe('get', () => {
      it('should return comment for given project and key by it identifier', async () => {

      });
    });

    describe('create', () => {
      it('should create single comment', async () => {

      });

      it('should create multiple comments', async () => {

      });
    });

    describe('delete', () => {
      it('should remove given comment', async () => {

      });
    });
});
