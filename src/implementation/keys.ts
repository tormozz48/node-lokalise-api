import {IKeys} from '../api/i-keys';
import {IKeyQuery} from '../query/i-key';
import {IKey} from '../model/i-key';
import {Base} from '../internal/base';
import {validateProjectId} from '../validators/common';

export class Keys extends Base implements IKeys {
    @validateProjectId
    list(projectId: string, query?: IKeyQuery):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.get({url: `/projects/${projectId}/keys`, query});
    }

    @validateProjectId
    get(projectId: string, keyId: string):
        Promise<{project_id: string, key: IKey}> {

        return this.request.get({url: `/projects/${projectId}/keys/${keyId}`});
    }

    @validateProjectId
    create(projectId: string, body: object):
        Promise<{keys: IKey[]}> {

        return this.request.post({body, url: `/projects/${projectId}/keys`});
    }

    @validateProjectId
    update(projectId: string, keyId: string, body: object):
        Promise<{project_id: string, key: IKey}> {

        return this.request.put({body, url: `/projects/${projectId}/keys/${keyId}`});
    }

    @validateProjectId
    updateMany(projectId: string, body: object):
        Promise<{project_id: string, keys: IKey[]}> {

        return this.request.put({body, url: `/projects/${projectId}/keys`});
    }

    @validateProjectId
    deleteMany(projectId: string, body: object):
        Promise<{project_id: string, keys_removed: boolean}> {

        return this.request.delete({body, url: `/projects/${projectId}/keys`});
    }

    @validateProjectId
    delete(projectId: string, keyId: string):
        Promise<{project_id: string, key_removed: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/keys/${keyId}`});
    }
}