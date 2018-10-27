import { IPage } from '../params/i-page';
import { IContributor } from '../model/i-contributor';
import { IContributors } from '../api/i-contributors';
import { Base } from '../internal/base';
export declare class Contributors extends Base implements IContributors {
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        contributors: IContributor[];
    }>;
    get(projectId: string, contributorId: string): Promise<{
        project_id: string;
        contributor: IContributor;
    }>;
    create(projectId: string, body: object): Promise<{
        contributors: IContributor[];
    }>;
    update(projectId: string, contributorId: string, body: object): Promise<{
        project_id: string;
        contributor: IContributor;
    }>;
    delete(projectId: string, contributorId: string): Promise<{
        project_id: string;
        contributor_deleted: boolean;
    }>;
}
