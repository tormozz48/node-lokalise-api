import { IFiles } from '../api/i-files';
import { IFileQuery } from '../query/i-file';
import { IFile } from '../model/i-file';
import { Base } from '../internal/base';
export declare class Files extends Base implements IFiles {
    list(projectId: string, query?: IFileQuery): Promise<{
        projectId: string;
        files: IFile[];
    }>;
    upload(projectId: string, body: object): Promise<object>;
    download(projectId: string, body: object): Promise<{
        project_id: string;
        bundle_url: string;
    }>;
}
