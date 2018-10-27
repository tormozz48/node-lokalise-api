import { IPage } from '../params/i-page';
export interface IFiles {
    list(projectId: string, query?: IPage): Promise<any>;
    upload(projectId: string, body: object): Promise<any>;
    download(projectId: string, body: object): Promise<any>;
}
