import { IPage } from '../params/i-page';
import { ITask } from '../model/i-task';
export interface ITasks {
    list(projectId: string, query?: IPage): Promise<{
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
