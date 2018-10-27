import {ISnapshots} from '../api/i-snapshots';
import {IPage} from '../params/i-page';
import {ISnapshot} from '../model/i-snapshot';
import {Base} from '../internal/base';

export class Snapshots extends Base implements ISnapshots {
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, snapshots: ISnapshot[]}> {

        return this.request.get({url: `/projects/${projectId}/snapshots`, query});
    }

    create(projectId: string, body: object):
        Promise<{project_id: string, snapshot: ISnapshot}> {

        return this.request.post({body, url: `/projects/${projectId}/snapshots`});
    }

    restore(projectId: string, snapshotId: number): Promise<object> {
        return this.request.post({body: {}, url: `/projects/{project_id}/snapshots`});
    }

    delete(projectId: string, snapshotId: number):
        Promise<{project_id: string, snapshot_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/snapshots/${snapshotId}`});
    }
}