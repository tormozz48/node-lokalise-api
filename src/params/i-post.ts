export interface IPost {
    /**
     * API url (required)
     * @type {string}
     * @memberof IPost
     */
    readonly url: string;

    /**
     * Advanced body object (optional)
     * @type {object}
     * @memberof IPost
     */
    readonly body: object;
}
