import {IFiles} from '../api/i-files';
import {IFileQuery} from '../query/i-file';
import {IFile} from '../model/i-file';
import {Base} from '../internal/base';
import {validate, checkString as s} from '../internal/validators';

export class Files extends Base implements IFiles {
    @validate
    list(@s projectId: string, query?: IFileQuery):
        Promise<{projectId: string, files: IFile[]}> {

        return this.request.get({url: `/projects/${projectId}/files`, query});
    }

    @validate
    upload(@s projectId: string, body: object): Promise<object> {
        return this.request.post({body, url: `/projects/${projectId}/files/upload`});
    }

    @validate
    download(@s projectId: string, body: object):
        Promise<{project_id: string, bundle_url: string}> {

        return this.request.post({body, url: `/projects/${projectId}/files/download`});
    }
}