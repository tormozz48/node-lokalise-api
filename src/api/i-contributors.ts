import {IPage} from '../params/i-page';

export interface IContributors {
    list(projectId: string, query?: IPage): Promise<any>;
    get(projectId: string, contributorId: string): Promise<any>;
    create(projectId: string, body: object): Promise<any>;
    update(projectId: string, contributorId: string, body: object): Promise<any>;
    delete(projectId: string, contributorId: string): Promise<any>;
}