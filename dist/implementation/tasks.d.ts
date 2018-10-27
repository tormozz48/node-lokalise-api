import { ITasks } from '../api/i-tasks';
import { ITaskQuery } from '../query/i-task';
import { ITask } from '../model/i-task';
import { Base } from '../internal/base';
export declare class Tasks extends Base implements ITasks {
    list(projectId: string, query?: ITaskQuery): Promise<{
        project_id: string;
        tasks: ITask[];
    }>;
    get(projectId: string, taskId: string): Promise<{
        project_id: string;
        task: ITask;
    }>;
    create(projectId: string, body: object): Promise<{
        project_id: string;
        task: ITask;
    }>;
    update(projectId: string, taskId: string, body: object): Promise<{
        project_id: string;
        task: ITask;
    }>;
    delete(projectId: string, taskId: string): Promise<{
        project_id: string;
        task_deleted: boolean;
    }>;
}
