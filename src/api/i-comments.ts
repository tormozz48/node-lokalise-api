import {IPage} from '../params/i-page';
import {IComment} from '../model/i-comment';

/**
 * @export
 * @interface IComments
 * @description Comments can be used to give translators a context about the key,
 * or as a discussion about certain aspects of translation for the key.
 * There is a separate comments thread for each key.
 * All comments are cross-posted into project chat.
 */
export interface IComments {
    /**
     * @public
     * @description Retrieves a list of all comments in the project or for given key (if specified).
     * @param {string} projectId
     * @param {string} [keyId]
     * @param {IPage} [query]
     * @returns {Promise<{project_id: string, comments: IComment[]}>}
     * @memberof IComments
     */
    list(projectId: string, keyId?: string, query?: IPage):
        Promise<{project_id: string, comments: IComment[]}>;

    /**
     * @public
     * @description Retrieves a Comment object.
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} commentId
     * @returns {Promise<{project_id: string, comment: IComment}>}
     * @memberof IComments
     */
    get(projectId: string, keyId: string, commentId: string):
        Promise<{project_id: string, comment: IComment}>;

    /**
     * @public
     * @description Adds a set of comments to the key
     * @param {string} projectId
     * @param {string} keyId
     * @param {object} body
     * @returns {Promise<{project_id: string, comments: IComment[]}>}
     * @memberof IComments
     */
    create(projectId: string, keyId: string, body: object):
        Promise<{project_id: string, comments: IComment[]}>;

    /**
     * @public
     * @description Deletes a comment from the project. Authenticated user can only delete own comments
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} commentId
     * @returns {Promise<{project_id: string, comment_deleted: true}>}
     * @memberof IComments
     */
    delete(projectId: string, keyId: string, commentId: string):
        Promise<{project_id: string, comment_deleted: true}>;
}
