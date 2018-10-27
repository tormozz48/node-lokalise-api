import {IProjectQuery} from '../query/i-project';
import {IProject} from '../model/i-project';

/**
 * @export
 * @interface IProjects
 * @description Lokalise is a project-based translation management system.
 * We recommend to keep all platform keys in the same project.
 * Upload iOS, Android, frontend, backend and API language files
 * - everything that relates to a certain app or website - to the same project.
 * We provide you with key merging or referencing options, that let you avoid recurring work for translators.
 */
export interface IProjects {
    /**
     * @public
     * @description Retrieves a list of projects available to the user, authorized with a token.
     * @param {IProjectQuery} [query]
     * @returns {Promise<{projects: IProject[]}>}
     * @memberof IProjects
     */
    list(query?: IProjectQuery): Promise<{projects: IProject[]}>;

    /**
     * @public
     * @description Retrieves a Project object.
     * @param {string} projectId
     * @returns {Promise<IProject>}
     * @memberof IProjects
     */
    get(projectId: string): Promise<IProject>;

    /**
     * @public
     * @description Creates a new project in the specified team.
     * Requires Admin role in the team.
     * @param {object} body
     * @returns {Promise<IProject>}
     * @memberof IProjects
     */
    create(body: object): Promise<IProject>;

    /**
     * @public
     * @description Updates the details of a project.
     * Requires Manage settings admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<IProject>}
     * @memberof IProjects
     */
    update(projectId: string, body: object): Promise<IProject>;

    /**
     * @public
     * @description Deletes all keys and translations from the project.
     * Requires Manage settings admin right.
     * @param {string} projectId
     * @returns {Promise<{project_id: string, keys_deleted: boolean}>}
     * @memberof IProjects
     */
    empty(projectId: string):
        Promise<{project_id: string, keys_deleted: boolean}>;

    /**
     * @public
     * @description Deletes a project.
     * @param {string} projectId
     * @returns {Promise<{project_id: string, keys_deleted: boolean}>}
     * @memberof IProjects
     */
    delete(projectId: string):
        Promise<{project_id: string, keys_deleted: boolean}>;
}