import {IPage} from '../params/i-page';

export interface IKeys {
    list(projectId: string, query?: IPage): Promise<any>;
    get(projectId: string, keyId: string): Promise<any>;
    create(projectId: string, body: object): Promise<any>;
    update(projectId: string, keyId: string, body: object): Promise<any>;
    updateMany(projectId: string, body: object): Promise<any>;
    deleteMany(projectId: string, body: object): Promise<any>;
    delete(projectId: string, keyId: string): Promise<any>;
}