import { IPage } from '../params/i-page';
import { IProject } from '../model/i-project';
export interface IProjects {
    list(query?: IPage): Promise<{
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
