import {ITeamUsers} from '../api/i-team-users';
import {IPage} from '../params/i-page';
import {ITeamUser} from '../model/i-team-user';
import {Base} from '../internal/base';

export class TeamUsers extends Base implements ITeamUsers {
    list(teamId: string, query?: IPage):
        Promise<{team_id: number, team_users: ITeamUser[]}> {

        return this.request.get({url: `/teams/${teamId}/users`, query});
    }

    get(teamId: string, userId: string):
        Promise<{team_id: number, team_user: ITeamUser}> {

        return this.request.get({url: `/teams/${teamId}/users/${userId}`});
    }

    update(teamId: string, userId: string, body: object):
        Promise<{team_id: number, team_user: ITeamUser}> {

        return this.request.put({body, url: `/teams/${teamId}/users/${userId}`});
    }

    delete(teamId: string, userId: string):
        Promise<{team_id: number, team_user_deleted: boolean}> {

        return this.request.delete({url: `/teams/${teamId}/users/${userId}`});
    }
}