import { IPage } from '../params/i-page';
import { IFile } from '../model/i-file';
export interface IFiles {
    list(projectId: string, query?: IPage): Promise<{
        projectId: string;
        files: IFile[];
    }>;
    upload(projectId: string, body: object): Promise<object>;
    download(projectId: string, body: object): Promise<{
        project_id: string;
        bundle_url: string;
    }>;
}
