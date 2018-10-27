import { IPage } from '../params/i-page';
import { ITeam } from '../model/i-team';
export interface ITeams {
    list(query?: IPage): Promise<{
        teams: ITeam[];
    }>;
}
