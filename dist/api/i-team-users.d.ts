import { IPage } from '../params/i-page';
import { ITeamUser } from '../model/i-team-user';
export interface ITeamUsers {
    list(teamId: string, query?: IPage): Promise<{
        team_id: number;
        team_users: ITeamUser[];
    }>;
    get(teamId: string, userId: string): Promise<{
        team_id: number;
        team_user: ITeamUser;
    }>;
    update(teamId: string, userId: string, body: object): Promise<{
        team_id: number;
        team_user: ITeamUser;
    }>;
    delete(teamId: string, userId: string): Promise<{
        team_id: number;
        team_user_deleted: boolean;
    }>;
}
