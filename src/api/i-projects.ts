import {IPage} from '../params/i-page';

export interface IProjects {
    list(query?: IPage): Promise<any>;
    get(projectId: string): Promise<any>;
    create(body: object): Promise<any>;
    update(projectId: string, body: object): Promise<any>;
    empty(projectId: string): Promise<any>;
    delete(projectId: string): Promise<any>;
}