import {IPage} from '../params/i-page';
import {ITeam} from '../model/i-team';

export interface ITeams {
    /**
     * @public
     * @description Lists all teams available to the user.
     * @param {IPage} [query]
     * @returns {Promise<{teams: ITeam[]}>}
     * @memberof ITeams
     */
    list(query?: IPage): Promise<{teams: ITeam[]}>;
}