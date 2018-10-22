import * as got from 'got';

import { IDelete } from '../params/i-delete';
import { IGet } from '../params/i-get';
import { IOptions } from '../params/i-options';
import { IPost } from '../params/i-post';
import { IPut } from '../params/i-put';
import { IRequest } from './i-request';

interface IRequestOptions {
    baseUrl: string;
    body?: object;
    encoding: string;
    headers: object;
    json?: boolean;
    method?: string;
    query?: object;
    retry: number;
    timeout: number;
}

export class Request implements IRequest {
    private options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }

    public get(params: IGet): any {
        const options = this.getRequestOptions();

        options.method = 'get';
        options.query = params.query;

        return this.request(params.url, options);
    }

    public post(params: IPost): any {
        const options = this.getRequestOptions();

        options.method = 'post';
        options.body = params.body;

        return this.request(params.url, options);
    }

    public put(params: IPut): any {
        const options = this.getRequestOptions();

        options.method = 'put';
        options.body = params.body;

        return this.request(params.url, options);
    }

    public delete(params: IDelete): any {
        const options = this.getRequestOptions();

        options.method = 'delete';
        return this.request(params.url, options);
    }

    private request(url: string, options: IRequestOptions) {
        console.log(url);
        return got[options.method](url, options as object)
            .then(({body}) => body)
            .catch((error) => {
                throw error;
            });
    }

    private getRequestOptions(): IRequestOptions {
        return {
            baseUrl: this.options.baseUrl,
            encoding: 'utf-8',
            json: true,
            headers: this.getHeaders(),
            retry: this.options.retry,
            timeout: this.options.timeout,
        };
    }

    private getHeaders(): object {
        return {'x-api-token': this.options.token};
    }
}
