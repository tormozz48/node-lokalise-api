import {IFiles} from '../api/i-files';
import {IFileQuery} from '../query/i-file';
import {IFile} from '../model/i-file';
import {Base} from '../internal/base';

export class Files extends Base implements IFiles {
    list(projectId: string, query?: IFileQuery):
        Promise<{projectId: string, files: IFile[]}> {

        return this.request.get({url: `/projects/${projectId}/files`, query});
    }

    upload(projectId: string, body: object): Promise<object> {
        return this.request.post({body, url: `/projects/${projectId}/files/upload`});
    }

    download(projectId: string, body: object):
        Promise<{project_id: string, bundle_url: string}> {

        return this.request.post({body, url: `/projects/${projectId}/files/download`});
    }
}