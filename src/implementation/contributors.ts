import {IPage} from '../params/i-page';
import {IContributor} from '../model/i-contributor';
import {IContributors} from '../api/i-contributors';
import {validate, checkNumber as n, checkString as s, checkPage} from '../internal/validators';

import {Base} from '../internal/base';

export class Contributors extends Base implements IContributors {
    @validate
    list(@s projectId: string, @checkPage query?: IPage):
        Promise<{project_id: string, contributors: IContributor[]}> {

        return this.request.get({url: `/projects/${projectId}/contributors`, query});
    }

    @validate
    get(@s projectId: string, @n contributorId: number):
        Promise<{project_id: string, contributor: IContributor}> {

        return this.request.get({url: `/projects/${projectId}/contributors/${contributorId}`});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{contributors: IContributor[]}> {

        return this.request.post({body, url: `/projects/${projectId}/contributors`});
    }

    @validate
    update(@s projectId: string, @n contributorId: number, body: object):
        Promise<{project_id: string, contributor: IContributor}> {

        return this.request.put({body, url: `/projects/${projectId}/contributors/${contributorId}`});
    }

    @validate
    delete(@s projectId: string, @n contributorId: number):
        Promise<{project_id: string, contributor_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/contributors/${contributorId}`});
    }
}