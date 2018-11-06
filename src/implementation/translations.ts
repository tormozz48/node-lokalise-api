import {ITranslations} from '../api/i-translations';
import {IPage} from '../params/i-page';
import {ITranslation} from '../model/i-translation';
import {Base } from '../internal/base';

export class Translations extends Base implements ITranslations {
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, translations: ITranslation[]}> {

        return this.request.get({url: `/projects/${projectId}/translations`, query});
    }

    get(projectId: string, translationId: string):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.get({url: `/projects/${projectId}/translations/${translationId}`});
    }

    update(projectId: string, translationId: string, body: object):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.put({body, url: `/projects/${projectId}/translations/${translationId}`});
    }
}