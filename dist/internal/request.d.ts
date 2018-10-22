import { IDelete } from '../params/i-delete';
import { IGet } from '../params/i-get';
import { IOptions } from '../params/i-options';
import { IPost } from '../params/i-post';
import { IPut } from '../params/i-put';
import { IRequest } from './i-request';
export declare class Request implements IRequest {
    private options;
    constructor(options: IOptions);
    get(params: IGet): any;
    post(params: IPost): any;
    put(params: IPut): any;
    delete(params: IDelete): any;
    private request;
    private getRequestOptions;
    private getHeaders;
}
