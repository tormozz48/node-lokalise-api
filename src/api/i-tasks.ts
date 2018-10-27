import {IPage} from '../params/i-page';

export interface ITasks {
    list(projectId: string, query?: IPage): Promise<any>;
    get(projectId: string): Promise<any>;
    create(projectId: string, body: object): Promise<any>;
    update(projectId: string, taskId: string, body: object): Promise<any>;
    delete(projectId: string, taskId: string): Promise<any>;
}