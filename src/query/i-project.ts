import {IPage} from '../params/i-page';

export interface IProjectQuery extends IPage {
    filter_team_id: string;
}