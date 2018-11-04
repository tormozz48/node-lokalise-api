/**
 * @export
 * @interface IOptions
 */
export interface IOptions {
    /**
     * Access token (required)
     * @type {string}
     * @memberof IOptions
     */
    readonly token: string;

    /**
     * Allowed timeout for request in milliseconds. (optional)
     * @type {number}
     * @memberof IOptions
     */
    readonly timeout?: number;

    /**
     * Number of retry attempts (optional)
     * @type {number}
     * @memberof IOptions
     */
    readonly retry?: number;

    /**
     * Base API url (optional)
     * @type {string}
     * @memberof IOptions
     */
    baseUrl?: string;
}
