import { IPage } from '../params/i-page';
export interface ILanguages {
    list(projectId?: string, query?: IPage): Promise<any>;
    get(projectId: string, langId: string): Promise<any>;
    create(projectId: string, body: object): Promise<any>;
    update(projectId: string, langId: string, body: object): Promise<any>;
    delete(projectId: string, langId: string): Promise<any>;
}
