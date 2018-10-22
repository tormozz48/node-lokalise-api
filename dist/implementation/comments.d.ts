import { IComments } from '../api/i-comments';
import { IPage } from '../params/i-page';
import { Base } from '../internal/base';
export declare class Comments extends Base implements IComments {
    list(projectId: string, keyId?: string, query?: IPage): Promise<any>;
    get(projectId: string, keyId: string, commentId: string): Promise<any>;
    create(projectId: string, keyId: string, body: object): Promise<any>;
    delete(projectId: string, keyId: string, commentId: string): Promise<any>;
}
