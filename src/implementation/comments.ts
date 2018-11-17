import {IComments} from '../api/i-comments';
import {IComment} from '../model/i-comment';
import {IPage} from '../params/i-page';
import {Base} from '../internal/base';
import {validate, checkNumber as n, checkString as s, checkPage} from '../internal/validators';

export class Comments extends Base implements IComments {
    @validate
    public list(@s projectId: string, keyId?: number, @checkPage query?: IPage):
        Promise<{project_id: string, comments: IComment[]}> {

        const url = keyId
            ? `/projects/${projectId}/keys/${keyId}/comments`
            : `/projects/${projectId}/comments`;

        return this.request.get({url, query});
    }

    @validate
    public get(@s projectId: string, @n keyId: number, @n commentId: number):
        Promise<{project_id: string, comment: IComment}> {

        return this.request.get({url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}`});
    }

    @validate
    public create(@s projectId: string, @n keyId: number, body: object):
        Promise<{project_id: string, comments: IComment[]}> {

        return this.request.post({body, url: `/projects/${projectId}/keys/${keyId}/comments`});
    }

    @validate
    public delete(@s projectId: string, @n keyId: number, @n commentId: number):
        Promise<{project_id: string, comment_deleted: true}> {

        return this.request.delete({url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}`});
    }
}
