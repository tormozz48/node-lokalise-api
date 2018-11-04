import {IPage} from './i-page';

/**
 * @export
 * @interface IGet
 */
export interface IGet {
    /**
     * API url (required)
     * @type {string}
     * @memberof IGet
     */
    readonly url: string;

    /**
     * Advanced query parameters like number of page and records per page. (optional)
     * @type {IPage}
     * @memberof IGet
     */
    readonly query?: IPage;
}
