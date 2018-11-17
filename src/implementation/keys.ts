import {IKeys} from '../api/i-keys';
import {IKeyQuery} from '../query/i-key';
import {IKey} from '../model/i-key';
import {Base} from '../internal/base';
import {validate, checkString as s, checkNumber as n} from '../internal/validators';

export class Keys extends Base implements IKeys {
    @validate
    list(@s projectId: string, query?: IKeyQuery):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.get({url: `/projects/${projectId}/keys`, query});
    }

    @validate
    get(@s projectId: string, @n keyId: number):
        Promise<{project_id: string, key: IKey}> {

        return this.request.get({url: `/projects/${projectId}/keys/${keyId}`});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{keys: IKey[]}> {

        return this.request.post({body, url: `/projects/${projectId}/keys`});
    }

    @validate
    update(@s projectId: string, @n keyId: number, body: object):
        Promise<{project_id: string, key: IKey}> {

        return this.request.put({body, url: `/projects/${projectId}/keys/${keyId}`});
    }

    @validate
    updateMany(@s projectId: string, body: object):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.put({body, url: `/projects/${projectId}/keys`});
    }

    @validate
    deleteMany(@s projectId: string, body: object):
        Promise<{project_id: string, keys_removed: boolean}> {

        return this.request.delete({body, url: `/projects/${projectId}/keys`});
    }

    @validate
    delete(@s projectId: string, @n keyId: number):
        Promise<{project_id: string, key_removed: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/keys/${keyId}`});
    }
}