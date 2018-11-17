import {ITranslations} from '../api/i-translations';
import {IPage} from '../params/i-page';
import {ITranslation} from '../model/i-translation';
import {Base } from '../internal/base';
import {validateProjectId} from '../validators/common';

export class Translations extends Base implements ITranslations {
    @validateProjectId
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, translations: ITranslation[]}> {

        return this.request.get({url: `/projects/${projectId}/translations`, query});
    }

    @validateProjectId
    get(projectId: string, translationId: string):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.get({url: `/projects/${projectId}/translations/${translationId}`});
    }

    @validateProjectId
    update(projectId: string, translationId: string, body: object):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.put({body, url: `/projects/${projectId}/translations/${translationId}`});
    }
}