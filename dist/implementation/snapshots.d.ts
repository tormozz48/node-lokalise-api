import { ISnapshots } from '../api/i-snapshots';
import { IPage } from '../params/i-page';
import { ISnapshot } from '../model/i-snapshot';
import { Base } from '../internal/base';
export declare class Snapshots extends Base implements ISnapshots {
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        snapshots: ISnapshot[];
    }>;
    create(projectId: string, body: object): Promise<{
        project_id: string;
        snapshot: ISnapshot;
    }>;
    restore(projectId: string, snapshotId: number): Promise<object>;
    delete(projectId: string, snapshotId: number): Promise<{
        project_id: string;
        snapshot_deleted: boolean;
    }>;
}
