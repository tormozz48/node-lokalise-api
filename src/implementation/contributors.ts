import {IPage} from '../params/i-page';
import {IContributor} from '../model/i-contributor';
import {IContributors} from '../api/i-contributors';
import {validateProjectId} from '../validators/common';

import {Base} from '../internal/base';

export class Contributors extends Base implements IContributors {
    @validateProjectId
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, contributors: IContributor[]}> {

        return this.request.get({url: `/projects/${projectId}/contributors`, query});
    }

    @validateProjectId
    get(projectId: string, contributorId: string):
        Promise<{project_id: string, contributor: IContributor}> {

        return this.request.get({url: `/projects/${projectId}/contributors/${contributorId}`});
    }

    @validateProjectId
    create(projectId: string, body: object):
        Promise<{contributors: IContributor[]}> {

        return this.request.post({body, url: `/projects/${projectId}/contributors`});
    }

    @validateProjectId
    update(projectId: string, contributorId: string, body: object):
        Promise<{project_id: string, contributor: IContributor}> {

        return this.request.put({body, url: `/projects/${projectId}/contributors/${contributorId}`});
    }

    @validateProjectId
    delete(projectId: string, contributorId: string):
        Promise<{project_id: string, contributor_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/contributors/${contributorId}`});
    }
}