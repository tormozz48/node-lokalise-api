import {ITasks} from '../api/i-tasks';
import {ITaskQuery} from '../query/i-task';
import {ITask} from '../model/i-task';
import {Base} from '../internal/base';
import {validate, checkString as s, checkNumber as n} from '../internal/validators';

export class Tasks extends Base implements ITasks {
    @validate
    list(@s projectId: string, query?: ITaskQuery):
        Promise<{project_id: string, tasks: ITask[]}> {

        return this.request.get({url: `/projects/${projectId}/tasks`, query});
    }

    @validate
    get(@s projectId: string, @n taskId: number):
        Promise<{project_id: string, task: ITask}> {

        return this.request.get({url: `/projects/${projectId}/tasks/${taskId}`});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{project_id: string, task: ITask}> {

        return this.request.post({body, url: `/projects/${projectId}/tasks`});
    }

    @validate
    update(@s projectId: string, @n taskId: number, body: object):
        Promise<{project_id: string, task: ITask}> {

        return this.request.put({body, url: `/projects/${projectId}/tasks/${taskId}`});
    }

    @validate
    delete(@s projectId: string, @n taskId: number):
        Promise<{project_id: string, task_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/tasks/${taskId}`});
    }
}