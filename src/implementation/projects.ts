import {IProjects} from '../api/i-projects';
import {IProjectQuery} from '../query/i-project';
import {IProject} from '../model/i-project';
import {Base} from '../internal/base';
import {validateProjectId} from '../validators/common';

export class Projects extends Base implements IProjects {
    list(query?: IProjectQuery): Promise<{projects: IProject[]}> {
        return this.request.get({url: `/projects`, query});
    }

    @validateProjectId
    get(projectId: string): Promise<IProject> {
        return this.request.get({url: `/projects/${projectId}`});
    }

    create(body: object): Promise<IProject> {
        return this.request.post({body, url: `/projects`});
    }

    @validateProjectId
    update(projectId: string, body: object): Promise<IProject> {
        return this.request.put({body, url: `/projects/${projectId}`});
    }

    @validateProjectId
    empty(projectId: string): Promise<{project_id: string, keys_deleted: boolean}> {
        return this.request.put({body: {}, url: `/projects/${projectId}/empty`});
    }

    @validateProjectId
    delete(projectId: string): Promise<{project_id: string, keys_deleted: boolean}> {
        return this.request.delete({url: `/projects/${projectId}`});
    }
}