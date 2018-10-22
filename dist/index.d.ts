import { IComments } from './api/i-comments';
import { IOptions } from './params/i-options';
export default class LocaliseAPI {
    readonly comments: IComments;
    private readonly BASE_URL;
    private readonly TIMEOUT;
    private readonly RETRY;
    private request;
    constructor(options: IOptions);
    private parseOptions;
}
