import {IComments} from '../api/i-comments';
import {IComment} from '../model/i-comment';
import {IPage} from '../params/i-page';
import {Base} from '../internal/base';

export class Comments extends Base implements IComments {
    public list(projectId: string, keyId?: string, query?: IPage):
        Promise<{project_id: string, comments: IComment[]}> {

        const url = keyId
            ? `/projects/${projectId}/keys/${keyId}/comments`
            : `/projects/${projectId}/comments`;

        return this.request.get({url, query});
    }

    public get(projectId: string, keyId: string, commentId: string):
        Promise<{project_id: string, comment: IComment}> {

        return this.request.get({url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}`});
    }

    public create(projectId: string, keyId: string, body: object):
        Promise<{project_id: string, comments: IComment[]}> {

        return this.request.post({body, url: `/projects/${projectId}/keys/${keyId}/comments`});
    }

    public delete(projectId: string, keyId: string, commentId: string):
        Promise<{project_id: string, comment_deleted: true}> {

        return this.request.delete({url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}`});
    }
}
