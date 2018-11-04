export interface IPut {
    /**
     * API url (required)
     * @type {string}
     * @memberof IPut
     */
    readonly url: string;

    /**
     * Advanced body object (optional)
     * @type {object}
     * @memberof IPut
     */
    readonly body: object;
}
