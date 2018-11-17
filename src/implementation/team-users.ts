import {ITeamUsers} from '../api/i-team-users';
import {IPage} from '../params/i-page';
import {ITeamUser} from '../model/i-team-user';
import {Base} from '../internal/base';
import {validate, checkNumber as n} from '../internal/validators';

export class TeamUsers extends Base implements ITeamUsers {
    @validate
    list(@n teamId: number, query?: IPage):
        Promise<{team_id: number, team_users: ITeamUser[]}> {

        return this.request.get({url: `/teams/${teamId}/users`, query});
    }

    @validate
    get(@n teamId: number, @n userId: number):
        Promise<{team_id: number, team_user: ITeamUser}> {

        return this.request.get({url: `/teams/${teamId}/users/${userId}`});
    }

    @validate
    update(@n teamId: number, @n userId: number, body: object):
        Promise<{team_id: number, team_user: ITeamUser}> {

        return this.request.put({body, url: `/teams/${teamId}/users/${userId}`});
    }

    @validate
    delete(@n teamId: number, userId: number):
        Promise<{team_id: number, team_user_deleted: boolean}> {

        return this.request.delete({url: `/teams/${teamId}/users/${userId}`});
    }
}