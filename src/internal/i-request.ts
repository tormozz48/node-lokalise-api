import { IDelete } from '../params/i-delete';
import { IGet } from '../params/i-get';
import { IPost } from '../params/i-post';
import { IPut } from '../params/i-put';

export interface IRequest {
    get(params: IGet): any;
    post(params: IPost): any;
    put(params: IPut): any;
    delete(params: IDelete): any;
}
