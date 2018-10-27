import { Base } from '../internal/base';
import { ILanguages } from '../api/i-languages';
import { IPage } from '../params/i-page';
import { ILanguage } from '../model/i-language';
export declare class Languages extends Base implements ILanguages {
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
