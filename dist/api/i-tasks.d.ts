import { ITaskQuery } from '../query/i-task';
import { ITask } from '../model/i-task';
/**
 * @export
 * @interface ITasks
 */
export interface ITasks {
    /**
     * @public
     * @description Lists all tasks in the project.
     * @param {string} projectId
     * @param {ITaskQuery} [query]
     * @returns {Promise<{project_id: string, tasks: ITask[]}>}
     * @memberof ITasks
     */
    list(projectId: string, query?: ITaskQuery): Promise<{
        project_id: string;
        tasks: ITask[];
    }>;
    /**
     * @public
     * @description Retrieves a Task object.
     * @param {string} projectId
     * @param {string} taskId
     * @returns {Promise<{project_id: string, task: ITask}>}
     * @memberof ITasks
     */
    get(projectId: string, taskId: string): Promise<{
        project_id: string;
        task: ITask;
    }>;
    /**
     * @public
     * @description Creates a task in the project.
     * Requires Manage tasks admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, task: ITask}>}
     * @memberof ITasks
     */
    create(projectId: string, body: object): Promise<{
        project_id: string;
        task: ITask;
    }>;
    /**
     * @public
     * @description Updates the properties of a task.
     * Requires Manage tasks admin right.
     * @param {string} projectId
     * @param {string} taskId
     * @param {object} body
     * @returns {Promise<{project_id: string, task: ITask}>}
     * @memberof ITasks
     */
    update(projectId: string, taskId: string, body: object): Promise<{
        project_id: string;
        task: ITask;
    }>;
    /**
     * @public
     * @description Deletes a task from the project.
     * Requires Manage tasks admin right.
     * @param {string} projectId
     * @param {string} taskId
     * @returns {Promise<{project_id: string, task_deleted: boolean}>}
     * @memberof ITasks
     */
    delete(projectId: string, taskId: string): Promise<{
        project_id: string;
        task_deleted: boolean;
    }>;
}
