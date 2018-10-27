import {IPage} from '../params/i-page';
import {IFile} from '../model/i-file';

/**
 * @export
 * @interface IFiles
 * @description Lokalise is project-oriented translation management system,
 * which means we store all keys and translations in the database and can generate files
 * in any format you require. Assigning a key to one or more platforms means including the key
 * in the export routine for file formats, associated with this platform,
 * e.g. if a key is assigned to iOS platform it would get included with strings and xliff format exports.
 * In addition to assign keys to platforms you may assign keys to files
 * and have different filename depending on the platform.
 */
export interface IFiles {
    /**
     * @public
     * @description Lists project files and associated key count.
     * If there are some keys in the project that do not have a file association,
     * they will be returned with filename __unassigned__.
     * @param {string} projectId
     * @param {IPage} [query]
     * @returns {Promise<{projectId: string, files: IFile[]}>}
     * @memberof IFiles
     */
    list(projectId: string, query?: IPage):
        Promise<{projectId: string, files: IFile[]}>;

    /**
     * @public
     * @description Imports a localization file to the project.
     * Requires Upload files admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<object>}
     * @memberof IFiles
     */
    upload(projectId: string, body: object):
        Promise<object>;

    /**
     * @public
     * @description Exports project files as a .zip bundle. Generated bundle will be uploaded to an Amazon S3 bucket,
     * which will be stored there for 12 months available to download.
     * As the bundle is generated and uploaded you would get a response with the URL to the file.
     * Requires Download files admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, bundle_url: string}>}
     * @memberof IFiles
     */
    download(projectId: string, body: object):
        Promise<{project_id: string, bundle_url: string}>;
}