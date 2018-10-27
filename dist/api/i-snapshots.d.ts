import { IPage } from '../params/i-page';
import { ISnapshot } from '../model/i-snapshot';
/**
 * @export
 * @interface ISnapshots
 */
export interface ISnapshots {
    /**
     * @public
     * @description Retrieves a list of project snapshots.
     * Requires Manage settings admin right.
     * @param {string} projectId
     * @param {IPage} [query]
     * @returns {Promise<{project_id: string, snapshots: ISnapshot[]}>}
     * @memberof ISnapshots
     */
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        snapshots: ISnapshot[];
    }>;
    /**
     * @public
     * @description Creates snapshot of the project.
     * Requires Manage settings admin right.
     * @param {string} projectId
     * @param {object} body
     * @returns {Promise<{project_id: string, snapshot: ISnapshot}>}
     * @memberof ISnapshots
     */
    create(projectId: string, body: object): Promise<{
        project_id: string;
        snapshot: ISnapshot;
    }>;
    /**
     * @public
     * @description Restores project snapshot to a project copy.
     * Requires Manage settings admin right and Admin role in the team.
     * @param {string} projectId
     * @param {number} snapshotId
     * @returns {Promise<object>}
     * @memberof ISnapshots
     */
    restore(projectId: string, snapshotId: number): Promise<object>;
    /**
     * @public
     * @description Deletes project snapshot.
     * Requires Manage settings admin right.
     * @param {string} projectId
     * @param {number} snapshotId
     * @returns {Promise<{project_id: string, snapshot_deleted: boolean}>}
     * @memberof ISnapshots
     */
    delete(projectId: string, snapshotId: number): Promise<{
        project_id: string;
        snapshot_deleted: boolean;
    }>;
}
