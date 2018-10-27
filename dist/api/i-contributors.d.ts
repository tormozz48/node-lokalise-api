import { IPage } from '../params/i-page';
import { IContributor } from '../model/i-contributor';
/**
 * @export
 * @interface IContributors
 * @description You may add unlimited number of contributors to your project.
 * User roles include admin, translator and reviewer.
 */
export interface IContributors {
    /**
     * @public
     * @description Lists contributors of the project, including access levels to the project languages.
     * Admins always have read/write access to all languages.
     * @param {string} projectId
     * @param {IPage} [query]
     * @returns {Promise<{project_id: string, contributors: IContributor[]}>}
     * @memberof IContributors
     */
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        contributors: IContributor[];
    }>;
    /**
     * @public
     * @description Retrieves a Contributor object.
     * @param {string} projectId
     * @param {string} contributorId
     * @returns {Promise<{project_id: string, contributor: IContributor}>}
     * @memberof IContributors
     */
    get(projectId: string, contributorId: string): Promise<{
        project_id: string;
        contributor: IContributor;
    }>;
    /**
     * @public
     * @description Creates one or more contributors in the project.
     * Requires Manage contributors admin right. If is_admin flag is set to true,
     * the user would automatically get access to all project languages,
     * overriding supplied languages object. Attribute fullname will be ignored,
     * if the user has already been registered in Lokalise.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{contributors: IContributor[]}>}
     * @memberof IContributors
     */
    create(projectId: string, body: object): Promise<{
        contributors: IContributor[];
    }>;
    /**
     * @public
     * @description Updates the properties of a contributor. Requires Manage contributors admin right.
     * If you want to give an existing contributor access to a new language,
     * you must specify full languages array, including the previously added languages as well.
     * @param {string} projectId
     * @param {string} contributorId
     * @param {object} body
     * @returns {Promise<{project_id: string, contributor: IContributor}>}
     * @memberof IContributors
     */
    update(projectId: string, contributorId: string, body: object): Promise<{
        project_id: string;
        contributor: IContributor;
    }>;
    /**
     * @public
     * @description Deletes a user from the project. Requires Manage contributors admin right.
     * @param {string} projectId
     * @param {string} contributorId
     * @returns {Promise<{project_id: string, contributor_deleted: boolean}>}
     * @memberof IContributors
     */
    delete(projectId: string, contributorId: string): Promise<{
        project_id: string;
        contributor_deleted: boolean;
    }>;
}
