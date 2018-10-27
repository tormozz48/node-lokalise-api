import { IKeys } from '../api/i-keys';
import { IKeyQuery } from '../query/i-key';
import { IKey } from '../model/i-key';
import { Base } from '../internal/base';
export declare class Keys extends Base implements IKeys {
    list(projectId: string, query?: IKeyQuery): Promise<{
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
