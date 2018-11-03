import {IComments} from './api/i-comments';
import {IContributors} from './api/i-contributors';
import {IFiles} from './api/i-files';
import {IKeys} from './api/i-keys';
import {ILanguages} from './api/i-languages';
import {IProjects} from './api/i-projects';
import {IScreenshots} from './api/i-screenshots';
import {ISnapshots} from './api/i-snapshots';
import {ITasks} from './api/i-tasks';
import {ITeamUsers} from './api/i-team-users';
import {ITeams} from './api/i-teams';
import {ITranslations} from './api/i-translations';

import {IRequest} from './internal/i-request';
import {IOptions} from './params/i-options';

import {Comments} from './implementation/comments';
import {Contributors} from './implementation/contributors';
import {Files} from './implementation/files';
import {Keys} from './implementation/keys';
import {Languages} from './implementation/languages';
import {Projects} from './implementation/projects';
import {Screenshots} from './implementation/screenshots';
import {Snapshots} from './implementation/snapshots';
import {Tasks} from './implementation/tasks';
import {TeamUsers} from './implementation/team-users';
import {Teams} from './implementation/teams';
import {Translations} from './implementation/translations';

import {Request} from './internal/request';

export default class LocaliseAPI {
    private _comments: IComments;
    private _contributors: IContributors;
    private _files: IFiles;
    private _keys: IKeys;
    private _languages: ILanguages;
    private _projects: IProjects;
    private _screenshots: IScreenshots;
    private _snapshots: ISnapshots;
    private _tasks: ITasks;
    private _teamUsers: ITeamUsers;
    private _teams: ITeams;
    private _translations: ITranslations;

    private readonly BASE_URL: string = 'https://api.lokalise.co/api2';
    private readonly TIMEOUT: number = 10000;
    private readonly RETRY: number = 2;

    private request: IRequest;

    constructor(options: IOptions) {
        this.request = new Request(this.parseOptions(options));

        this._comments = new Comments(this.request);
        this._contributors = new Contributors(this.request);
        this._files = new Files(this.request);
        this._keys = new Keys(this.request);
        this._languages = new Languages(this.request);
        this._projects = new Projects(this.request);
        this._screenshots = new Screenshots(this.request);
        this._snapshots = new Snapshots(this.request);
        this._tasks = new Tasks(this.request);
        this._teamUsers = new TeamUsers(this.request);
        this._teams = new Teams(this.request);
        this._translations = new Translations(this.request);
    }

    /**
     * @readonly
     * @returns <IComments>
     * @memberof LocaliseAPI
     */
    public get comments() {
        return this._comments;
    }

    /**
     * @readonly
     * @returns <IContributors>
     * @memberof LocaliseAPI
     */
    public get contributors() {
        return this._contributors;
    }

    /**
     * @readonly
     * @returns <IFiles>
     * @memberof LocaliseAPI
     */
    public get files() {
        return this._files;
    }

    /**
     * @readonly
     * @returns <IKeys>
     * @memberof LocaliseAPI
     */
    public get keys() {
        return this._keys;
    }

    /**
     * @readonly
     * @returns <ILanguages>
     * @memberof LocaliseAPI
     */
    public get languages() {
        return this._languages;
    }

    /**
     * @readonly
     * @returns <IProjects>
     * @memberof LocaliseAPI
     */
    public get projects() {
        return this._projects;
    }

    /**
     * @readonly
     * @returns <IScreenshots>
     * @memberof LocaliseAPI
     */
    public get screenshots() {
        return this._screenshots;
    }

    /**
     * @readonly
     * @returns <ISnapshots>
     * @memberof LocaliseAPI
     */
    public get snapshots() {
        return this._snapshots;
    }

    /**
     * @readonly
     * @returns <ITasks>
     * @memberof LocaliseAPI
     */
    public get tasks() {
        return this._tasks;
    }

    /**
     * @readonly
     * @returns <ITeamUsers>
     * @memberof LocaliseAPI
     */
    public get teamUsers() {
        return this._teamUsers;
    }

    /**
     * @readonly
     * @returns <ITeams>
     * @memberof LocaliseAPI
     */
    public get teams() {
        return this._teams;
    }

    /**
     * @readonly
     * @returns <ITranslations>
     * @memberof LocaliseAPI
     */
    public get translations() {
        return this._translations;
    }

    private parseOptions(options: IOptions): IOptions {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;

        return <IOptions>{token: options.token, baseUrl, timeout, retry};
    }
}
