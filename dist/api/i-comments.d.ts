import { IPage } from '../params/i-page';
export interface IComments {
    list(projectId: string, keyId?: string, query?: IPage): Promise<any>;
    get(projectId: string, keyId: string, commentId: string): Promise<any>;
    create(projectId: string, keyId: string, body: object): Promise<any>;
    delete(projectId: string, keyId: string, commentId: string): Promise<any>;
}
