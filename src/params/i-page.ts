/**
 * @export
 * @interface IPage
 */
export interface IPage {
    /**
     * Number of items to include (max 5000)
     * @type {number}
     * @memberof IPage
     */
    readonly page: number;

    /**
     * Return results starting from this page.
     * @type {number}
     * @memberof IPage
     */
    readonly limit: number;
}
