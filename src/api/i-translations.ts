import {IPage} from '../params/i-page';
import {ITranslation} from '../model/i-translation';

export interface ITranslations {
    /**
     * @public
     * @description Retrieves a list of project translation items, ungrouped.
     * You may want to request Keys resource in order
     * to get the structured key/translation pairs for all languages.
     * @param {string} projectId
     * @param {IPage} [query]
     * @returns {Promise<{project_id: string, translations: ITranslation[]}>}
     * @memberof ITranslations
     */
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, translations: ITranslation[]}>;

    /**
     * @public
     * @description Retrieves a Translation object.
     * @param {string} projectId
     * @param {number} translationId
     * @returns {Promise<{project_id: string, translation: ITranslation}>}
     * @memberof ITranslations
     */
    get(projectId: string, translationId: number):
        Promise<{project_id: string, translation: ITranslation}>;

    /**
     * @public
     * @description Updates a translation.
     * Alternatively, use Bulk key update endpoint to update translations.
     * @param {string} projectId
     * @param {number} translationId
     * @param {object} body
     * @returns {Promise<{project_id: string, translation: ITranslation}>}
     * @memberof ITranslations
     */
    update(projectId: string, translationId: number, body: object):
        Promise<{project_id: string, translation: ITranslation}>;
}