import { IPage } from '../params/i-page';
import { ITeamUser } from '../model/i-team-user';
/**
 *
 * @export
 * @interface ITeamUsers
 */
export interface ITeamUsers {
    /**
     * @public
     * @description Lists all team users.
     * Requires Admin role in the team
     * @param {string} teamId
     * @param {IPage} [query]
     * @returns {Promise<{team_id: number, team_users: ITeamUser[]}>}
     * @memberof ITeamUsers
     */
    list(teamId: string, query?: IPage): Promise<{
        team_id: number;
        team_users: ITeamUser[];
    }>;
    /**
     * @public
     * @description Retrieves a Team user object.
     * Requires Admin role in the team.
     * @param {string} teamId
     * @param {string} userId
     * @returns {Promise<{team_id: number, team_user: ITeamUser}>}
     * @memberof ITeamUsers
     */
    get(teamId: string, userId: string): Promise<{
        team_id: number;
        team_user: ITeamUser;
    }>;
    /**
     * @public
     * @description Updates the role of a team user.
     * Requires Admin role in the team.
     * @param {string} teamId
     * @param {string} userId
     * @param {object} body
     * @returns {Promise<{team_id: number, team_user: ITeamUser}>}
     * @memberof ITeamUsers
     */
    update(teamId: string, userId: string, body: object): Promise<{
        team_id: number;
        team_user: ITeamUser;
    }>;
    /**
     * @public
     * @description Deletes a user from the team.
     * Requires Admin role in the team.
     * @param {string} teamId
     * @param {string} userId
     * @returns {Promise<{team_id: number, team_user_deleted: boolean}>}
     * @memberof ITeamUsers
     */
    delete(teamId: string, userId: string): Promise<{
        team_id: number;
        team_user_deleted: boolean;
    }>;
}
