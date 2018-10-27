import { IPage } from '../params/i-page';
import { IScreenshot } from '../model/i-screenshot';
/**
 * @export
 * @interface IScreenshots
 */
export interface IScreenshots {
    /**
     * @public
     * @description Retrieves a list of screenshots from the project.
     * @param {string} projectId
     * @param {IPage} [query]
     * @returns {Promise<{project_id: string, screenshots: IScreenshot[]}>}
     * @memberof IScreenshots
     */
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        screenshots: IScreenshot[];
    }>;
    /**
     * @public
     * @description Retrieves a Screenshot object.
     * @param {string} projectId
     * @param {number} screenshotId
     * @returns {Promise<{project_id: string, screenshot: IScreenshot}>}
     * @memberof IScreenshots
     */
    get(projectId: string, screenshotId: number): Promise<{
        project_id: string;
        screenshot: IScreenshot;
    }>;
    /**
     * @public
     * @description Creates one or more screenshots in the project.
     * Requires Manage screenshots admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, screenshots: IScreenshot[]}>}
     * @memberof IScreenshots
     */
    create(projectId: string, body: object): Promise<{
        project_id: string;
        screenshots: IScreenshot[];
    }>;
    /**
     * @public
     * @description Updates the properties of a screenshot.
     * Requires Manage screenshots admin right.
     * @param {string} projectId
     * @param {number} screenshotId
     * @param {object} body
     * @returns {Promise<{project_id: string, screenshot: IScreenshot}>}
     * @memberof IScreenshots
     */
    update(projectId: string, screenshotId: string, body: object): Promise<{
        project_id: string;
        screenshot: IScreenshot;
    }>;
    /**
     * @public
     * @description Deletes a screenshot from the project.
     * Requires Manage screenshots admin right.
     * @param {string} projectId
     * @param {number} screenshotId
     * @returns {Promise<{project_id: string, screenshot_deleted: boolean}>}
     * @memberof IScreenshots
     */
    delete(projectId: string, screenshotId: number): Promise<{
        project_id: string;
        screenshot_deleted: boolean;
    }>;
}
