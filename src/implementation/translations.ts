import {ITranslations} from '../api/i-translations';
import {IPage} from '../params/i-page';
import {ITranslation} from '../model/i-translation';
import {Base } from '../internal/base';
import {validate, checkString as s, checkNumber as n} from '../internal/validators';

export class Translations extends Base implements ITranslations {
    @validate
    list(@s projectId: string, query?: IPage):
        Promise<{project_id: string, translations: ITranslation[]}> {

        return this.request.get({url: `/projects/${projectId}/translations`, query});
    }

    @validate
    get(@s projectId: string, @n translationId: number):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.get({url: `/projects/${projectId}/translations/${translationId}`});
    }

    @validate
    update(@s projectId: string, @n translationId: number, body: object):
        Promise<{project_id: string, translation: ITranslation}> {

        return this.request.put({body, url: `/projects/${projectId}/translations/${translationId}`});
    }
}