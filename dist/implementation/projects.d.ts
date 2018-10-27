import { IProjects } from '../api/i-projects';
import { IProjectQuery } from '../query/i-project';
import { IProject } from '../model/i-project';
import { Base } from '../internal/base';
export declare class Projects extends Base implements IProjects {
    list(query?: IProjectQuery): Promise<{
        projects: IProject[];
    }>;
    get(projectId: string): Promise<IProject>;
    create(body: object): Promise<IProject>;
    update(projectId: string, body: object): Promise<IProject>;
    empty(projectId: string): Promise<{
        project_id: string;
        keys_deleted: boolean;
    }>;
    delete(projectId: string): Promise<{
        project_id: string;
        keys_deleted: boolean;
    }>;
}
