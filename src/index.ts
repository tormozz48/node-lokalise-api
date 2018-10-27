import { IComments } from './api/i-comments';
import { IContributors } from './api/i-contributors';
import { IFiles } from './api/i-files';
import { IKeys } from './api/i-keys';
import { ILanguages } from './api/i-languages';
import { IProjects } from './api/i-projects';
import { IScreenshots } from './api/i-screenshots';
import { ISnapshots } from './api/i-snapshots';
import { ITasks } from './api/i-tasks';
import { ITeamUsers } from './api/i-team-users';
import { ITeams } from './api/i-teams';
import { ITranslations } from './api/i-translations';

import { IRequest } from './internal/i-request';
import { IOptions } from './params/i-options';

import { Comments } from './implementation/comments';
import { Request } from './internal/request';

export default class LocaliseAPI {
    public readonly comments: IComments;
    public readonly contributors: IContributors;
    public readonly files: IFiles;
    public readonly keys: IKeys;
    public readonly languages: ILanguages;
    public readonly projects: IProjects;
    public readonly screenshots: IScreenshots;
    public readonly snapshots: ISnapshots;
    public readonly tasks: ITasks;
    public readonly teamUsers: ITeamUsers;
    public readonly teams: ITeams;
    public readonly translations: ITranslations;

    private readonly BASE_URL: string = 'https://api.lokalise.co/api2';
    private readonly TIMEOUT: number = 10000;
    private readonly RETRY: number = 2;

    private request: IRequest;

    constructor(options: IOptions) {
        this.request = new Request(this.parseOptions(options));

        this.comments = new Comments(this.request);
    }

    private parseOptions(options: IOptions): IOptions {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;

        return <IOptions>{token: options.token, baseUrl, timeout, retry};
    }
}
