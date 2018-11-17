import {ITeams} from '../api/i-teams';
import {IPage} from '../params/i-page';
import {ITeam} from '../model/i-team';
import {Base} from '../internal/base';
import {validate, checkPage} from '../internal/validators';

export class Teams extends Base implements ITeams {
    @validate
    list(@checkPage query?: IPage): Promise<{teams: ITeam[]}> {
        return this.request.get({url: `/teams`, query});
    }
}