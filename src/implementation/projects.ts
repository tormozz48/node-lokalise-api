import {IProjects} from '../api/i-projects';
import {IProjectQuery} from '../query/i-project';
import {IProject} from '../model/i-project';
import {Base} from '../internal/base';
import {validate, checkString as s} from '../internal/validators';

export class Projects extends Base implements IProjects {
    list(query?: IProjectQuery): Promise<{projects: IProject[]}> {
        return this.request.get({url: `/projects`, query});
    }

    @validate
    get(@s projectId: string): Promise<IProject> {
        return this.request.get({url: `/projects/${projectId}`});
    }

    create(body: object): Promise<IProject> {
        return this.request.post({body, url: `/projects`});
    }

    @validate
    update(@s projectId: string, body: object): Promise<IProject> {
        return this.request.put({body, url: `/projects/${projectId}`});
    }

    @validate
    empty(@s projectId: string): Promise<{project_id: string, keys_deleted: boolean}> {
        return this.request.put({body: {}, url: `/projects/${projectId}/empty`});
    }

    @validate
    delete(@s projectId: string): Promise<{project_id: string, keys_deleted: boolean}> {
        return this.request.delete({url: `/projects/${projectId}`});
    }
}