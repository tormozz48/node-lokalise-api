import {ISnapshots} from '../api/i-snapshots';
import {IPage} from '../params/i-page';
import {ISnapshot} from '../model/i-snapshot';
import {Base} from '../internal/base';
import {validate, checkString as s, checkNumber as n} from '../internal/validators';

export class Snapshots extends Base implements ISnapshots {
    @validate
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, snapshots: ISnapshot[]}> {

        return this.request.get({url: `/projects/${projectId}/snapshots`, query});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{project_id: string, snapshot: ISnapshot}> {

        return this.request.post({body, url: `/projects/${projectId}/snapshots`});
    }

    @validate
    restore(@s projectId: string, @n snapshotId: number): Promise<object> {
        return this.request.post({body: {}, url: `/projects/${projectId}/snapshots/${snapshotId}`});
    }

    @validate
    delete(@s projectId: string, @n snapshotId: number):
        Promise<{project_id: string, snapshot_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/snapshots/${snapshotId}`});
    }
}