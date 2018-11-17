import {IPage} from '../params/i-page';
import {ILanguage} from '../model/i-language';

/**
 * @export
 * @interface ILanguages
 * @description There are over 500 predefined language/dialect combinations available in Lokalise.
 * In case you require a custom language/dialect combination use custom_X languages
 * (where X is a number from 1 to 100). You may override language code and name when adding a language,
 * or update an existing language properties later.
 */
export interface ILanguages {
    /**
     * @public
     * @description Retrieves a list of system languages, or project languages
     * @param {string} [projectId]
     * @param {IPage} [query]
     * @returns {Promise<{project_id?: string, languages: ILanguage[]}>}
     * @memberof ILanguages
     */
    list(projectId?: string, query?: IPage):
        Promise<{project_id?: string, languages: ILanguage[]}>;

    /**
     * @public
     * @description Retrieves a Language object.
     * @param {string} projectId
     * @param {number} langId
     * @returns {Promise<{project_id: string, language: ILanguage}>}
     * @memberof ILanguages
     */
    get(projectId: string, langId: number):
        Promise<{project_id: string, language: ILanguage}>;

    /**
     * @public
     * @description Creates one or more languages in the project.
     * Requires Manage languages admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, languages: ILanguage[]}>}
     * @memberof ILanguages
     */
    create(projectId: string, body: object):
        Promise<{project_id: string, languages: ILanguage[]}>;

    /**
     * @public
     * @description Updates the properties of a language.
     * Requires Manage languages admin right.
     * @param {string} projectId
     * @param {number} langId
     * @param {object} body
     * @returns {Promise<{project_id: string, language: ILanguage}>}
     * @memberof ILanguages
     */
    update(projectId: string, langId: number, body: object):
        Promise<{project_id: string, language: ILanguage}>;

    /**
     * @public
     * @description Deletes a language from the project.
     * Requires Manage languages admin right.
     * @param {string} projectId
     * @param {number} langId
     * @returns {Promise<{project_id: string, language_deleted: boolean}>}
     * @memberof ILanguages
     */
    delete(projectId: string, langId: number):
        Promise<{project_id: string, language_deleted: boolean}>;
}