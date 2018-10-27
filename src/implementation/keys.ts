import {IKeys} from '../api/i-keys';
import {IKeyQuery} from '../query/i-key';
import {IKey} from '../model/i-key';

import {Base} from '../internal/base';

export class Keys extends Base implements IKeys {
    list(projectId: string, query?: IKeyQuery):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.get({url: `/projects/${projectId}/keys`, query});
    }

    get(projectId: string, keyId: string):
        Promise<{project_id: string, key: IKey}> {

        return this.request.get({url: `/projects/${projectId}/keys/${keyId}`});
    }

    create(projectId: string, body: object):
        Promise<{keys: IKey[]}> {

        return this.request.post({body, url: `/projects/${projectId}/keys`});
    }

    update(projectId: string, keyId: string, body: object):
        Promise<{project_id: string, key: IKey}> {

        return this.request.put({body, url: `/projects/${projectId}/keys/${keyId}`});
    }

    updateMany(projectId: string, body: object):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.put({body, url: `/projects/${projectId}/keys`});
    }

    deleteMany(projectId: string, body: object):
        Promise<{project_id: string, keys_removed: boolean}> {

        return this.request.delete({body, url: `/projects/${projectId}/keys`});
    }

    delete(projectId: string, keyId: string):
        Promise<{project_id: string, key_removed: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/keys/${keyId}`});
    }
}