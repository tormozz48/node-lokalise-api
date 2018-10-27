import {IPage} from '../params/i-page';

export interface ITeamUsers {
    list(teamId: string, query?: IPage): Promise<any>;
    get(teamId: string, userId: string): Promise<any>;
    update(teamId: string, userId: string, body: object): Promise<any>;
    delete(teamId: string, userId: string): Promise<any>;
}