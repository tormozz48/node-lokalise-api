import { IPage } from '../params/i-page';
import { IKey } from '../model/i-key';
export interface IKeys {
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        keys: IKey[];
    }>;
    get(projectId: string, keyId: string): Promise<{
        project_id: string;
        key: IKey;
    }>;
    create(projectId: string, body: object): Promise<{
        keys: IKey[];
    }>;
    update(projectId: string, keyId: string, body: object): Promise<{
        project_id: string;
        key: IKey;
    }>;
    updateMany(projectId: string, body: object): Promise<{
        project_id: string;
        keys: IKey[];
    }>;
    deleteMany(projectId: string, body: object): Promise<{
        project_id: string;
        keys_removed: boolean;
    }>;
    delete(projectId: string, keyId: string): Promise<{
        project_id: string;
        key_removed: boolean;
    }>;
}
