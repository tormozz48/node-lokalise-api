import { ITeams } from '../api/i-teams';
import { IPage } from '../params/i-page';
import { ITeam } from '../model/i-team';
import { Base } from '../internal/base';
export declare class Teams extends Base implements ITeams {
    list(query?: IPage): Promise<{
        teams: ITeam[];
    }>;
}
