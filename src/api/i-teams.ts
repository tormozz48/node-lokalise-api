import {IPage} from '../params/i-page';

export interface ITeams {
    list(query?: IPage): Promise<any>;
}