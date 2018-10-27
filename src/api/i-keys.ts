import {IKeyQuery} from '../query/i-key';
import {IKey} from '../model/i-key';

/**
 * @export
 * @interface IKeys
 * @description Keys are core item elements of the project.
 * Each phrase that is used in your app or website must be identified by a key
 * and have values that represent translations to various languages.
 * For example key index.welcome would have values of Welcome in English and Benvenuto in Italian.
 * Keys can be assigned to one or multiple platforms.
 * Once a key is assigned to a platform,
 * it would be included in the export for file formats related to this platform.
 */
export interface IKeys {
    /**
     * @public
     * @description Lists all keys in the project.
     * @param {string} projectId
     * @param {IKeyQuery} [query]
     * @returns {Promise<{project_id: string, keys: IKey[]}>}
     * @memberof IKeys
     */
    list(projectId: string, query?: IKeyQuery):
        Promise<{project_id: string, keys: IKey[]}>;

    /**
     * @public
     * @description Retrieves a Key object.
     * @param {string} projectId
     * @param {string} keyId
     * @returns {Promise<{project_id: string, key: IKey}>}
     * @memberof IKeys
     */
    get(projectId: string, keyId: string):
        Promise<{project_id: string, key: IKey}>;

    /**
     * @public
     * @description Creates one or more keys in the project. Requires Manage keys admin right.
     * We recommend sending payload in chunks of up to 500 keys per request.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{keys: IKey[]}>}
     * @memberof IKeys
     */
    create(projectId: string, body: object):
        Promise<{keys: IKey[]}>;

    /**
     * @public
     * @description Updates the properties of a key and it’s associated objects.
     * Requires Manage keys admin right.
     * @param {string} projectId
     * @param {string} keyId
     * @param {object} body
     * @returns {Promise<{project_id: string, key: IKey}>}
     * @memberof IKeys
     */
    update(projectId: string, keyId: string, body: object):
        Promise<{project_id: string, key: IKey}>;

    /**
     * @public
     * @description Updates the properties of a key and it’s associated objects.
     * Requires Manage keys admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, keys: IKey[]}>}
     * @memberof IKeys
     */
    updateMany(projectId: string, body: object):
        Promise<{project_id: string, keys: IKey[]}>;

    /**
     * @public
     * @description Deletes multiple keys from the project.
     * Requires Manage keys admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, keys_removed: boolean}>}
     * @memberof IKeys
     */
    deleteMany(projectId: string, body: object):
        Promise<{project_id: string, keys_removed: boolean}>;

    /**
     * @public
     * @description Deletes a key from the project.
     * Requires Manage keys admin right.
     * @param {string} projectId
     * @param {string} keyId
     * @returns {Promise<{project_id: string, key_removed: boolean}>}
     * @memberof IKeys
     */
    delete(projectId: string, keyId: string):
        Promise<{project_id: string, key_removed: boolean}>;
}