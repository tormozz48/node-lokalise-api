import {IPage} from '../params/i-page';

export interface ITranslations {
    list(projectId: string, query?: IPage): Promise<any>;
    get(projectId: string, translationId: string): Promise<any>;
    update(projectId: string, translationId: string, body: object): Promise<any>;
}