import { IPage } from '../params/i-page';
import { IComment } from '../model/i-comment';
export interface IComments {
    list(projectId: string, keyId?: string, query?: IPage): Promise<{
        project_id: string;
        comments: IComment[];
    }>;
    get(projectId: string, keyId: string, commentId: string): Promise<{
        project_id: string;
        comment: IComment;
    }>;
    create(projectId: string, keyId: string, body: object): Promise<{
        project_id: string;
        comments: IComment[];
    }>;
    delete(projectId: string, keyId: string, commentId: string): Promise<{
        project_id: string;
        comment_deleted: true;
    }>;
}
