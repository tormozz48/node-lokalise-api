import { IPage } from '../params/i-page';
import { ILanguage } from '../model/i-language';
export interface ILanguages {
    list(projectId?: string, query?: IPage): Promise<{
        project_id?: string;
        languages: ILanguage[];
    }>;
    get(projectId: string, langId: string): Promise<{
        project_id: string;
        language: ILanguage;
    }>;
    create(projectId: string, body: object): Promise<{
        project_id: string;
        languages: ILanguage[];
    }>;
    update(projectId: string, langId: string, body: object): Promise<{
        project_id: string;
        language: ILanguage;
    }>;
    delete(projectId: string, langId: string): Promise<{
        project_id: string;
        language_deleted: boolean;
    }>;
}
