import { IComments } from './api/i-comments';
import { IRequest } from './internal/i-request';
import { IOptions } from './params/i-options';

import { Comments } from './implementation/comments';
import { Request } from './internal/request';

export default class LocaliseAPI {
    public readonly comments: IComments;

    private readonly BASE_URL: string = 'https://api.lokalise.co/api2';
    private readonly TIMEOUT: number = 10000;
    private readonly RETRY: number = 2;

    private request: IRequest;

    constructor(options: IOptions) {
        this.request = new Request(this.parseOptions(options));

        this.comments = new Comments(this.request);
    }

    private parseOptions(options: IOptions): IOptions {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;

        return <IOptions>{token: options.token, baseUrl, timeout, retry};
    }
}
