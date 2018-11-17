import {Base} from '../internal/base';
import {ILanguages} from '../api/i-languages';
import {IPage} from '../params/i-page';
import {ILanguage} from '../model/i-language';
import {validate, checkString as s, checkNumber as n} from '../internal/validators';

export class Languages extends Base implements ILanguages {
    list(projectId?: string, query?: IPage):
        Promise<{project_id?: string, languages: ILanguage[]}> {

        const url = projectId
            ? `/projects/${projectId}/languages`
            : `/system/languages`;

        return this.request.get({url, query});
    }

    @validate
    get(@s projectId: string, @n langId: number):
        Promise<{project_id: string, language: ILanguage}> {

        return this.request.get({url: `/projects/${projectId}/languages/${langId}`});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{project_id: string, languages: ILanguage[]}> {

        return this.request.post({body, url: `/projects/${projectId}/languages`});
    }

    @validate
    update(@s projectId: string, @n langId: number, body: object):
        Promise<{project_id: string, language: ILanguage}> {

        return this.request.put({body, url: `/projects/${projectId}/languages/${langId}`});
    }

    @validate
    delete(@s projectId: string, @n langId: number):
        Promise<{project_id: string, language_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/languages/${langId}`});
    }
}