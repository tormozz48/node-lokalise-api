/**
 * @export
 * @interface IDelete
 */
export interface IDelete {
    /**
     * API url (required)
     * @type {string}
     * @memberof IDelete
     */
    readonly url: string;

    /**
     * Advanced body object (optional)
     * @type {object}
     * @memberof IDelete
     */
    readonly body?: object;
}
