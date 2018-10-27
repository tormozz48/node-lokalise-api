import { IPage } from '../params/i-page';
import { ITranslation } from '../model/i-translation';
export interface ITranslations {
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        translations: ITranslation[];
    }>;
    get(projectId: string, translationId: string): Promise<{
        project_id: string;
        translation: ITranslation;
    }>;
    update(projectId: string, translationId: string, body: object): Promise<{
        project_id: string;
        translation: ITranslation;
    }>;
}
