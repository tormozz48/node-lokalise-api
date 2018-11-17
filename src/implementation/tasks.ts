import {ITasks} from '../api/i-tasks';
import {ITaskQuery} from '../query/i-task';
import {ITask} from '../model/i-task';
import {Base} from '../internal/base';
import {validateProjectId} from '../validators/common';

export class Tasks extends Base implements ITasks {
    @validateProjectId
    list(projectId: string, query?: ITaskQuery):
        Promise<{project_id: string, tasks: ITask[]}> {

        return this.request.get({url: `/projects/${projectId}/tasks`, query});
    }

    @validateProjectId
    get(projectId: string, taskId: string):
        Promise<{project_id: string, task: ITask}> {

        return this.request.get({url: `/projects/${projectId}/tasks/${taskId}`});
    }

    @validateProjectId
    create(projectId: string, body: object):
        Promise<{project_id: string, task: ITask}> {

        return this.request.post({body, url: `/projects/${projectId}/tasks`});
    }

    @validateProjectId
    update(projectId: string, taskId: string, body: object):
        Promise<{project_id: string, task: ITask}> {

        return this.request.put({body, url: `/projects/${projectId}/tasks/${taskId}`});
    }

    @validateProjectId
    delete(projectId: string, taskId: string):
        Promise<{project_id: string, task_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/tasks/${taskId}`});
    }
}