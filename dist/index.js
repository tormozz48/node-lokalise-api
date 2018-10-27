"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comments_1 = require("./implementation/comments");
const contributors_1 = require("./implementation/contributors");
const files_1 = require("./implementation/files");
const keys_1 = require("./implementation/keys");
const languages_1 = require("./implementation/languages");
const projects_1 = require("./implementation/projects");
const screenshots_1 = require("./implementation/screenshots");
const snapshots_1 = require("./implementation/snapshots");
const tasks_1 = require("./implementation/tasks");
const team_users_1 = require("./implementation/team-users");
const teams_1 = require("./implementation/teams");
const translations_1 = require("./implementation/translations");
const request_1 = require("./internal/request");
class LocaliseAPI {
    constructor(options) {
        this.BASE_URL = 'https://api.lokalise.co/api2';
        this.TIMEOUT = 10000;
        this.RETRY = 2;
        this.request = new request_1.Request(this.parseOptions(options));
        this.comments = new comments_1.Comments(this.request);
        this.contributors = new contributors_1.Contributors(this.request);
        this.files = new files_1.Files(this.request);
        this.keys = new keys_1.Keys(this.request);
        this.languages = new languages_1.Languages(this.request);
        this.projects = new projects_1.Projects(this.request);
        this.screenshots = new screenshots_1.Screenshots(this.request);
        this.snapshots = new snapshots_1.Snapshots(this.request);
        this.tasks = new tasks_1.Tasks(this.request);
        this.teamUsers = new team_users_1.TeamUsers(this.request);
        this.teams = new teams_1.Teams(this.request);
        this.translations = new translations_1.Translations(this.request);
    }
    parseOptions(options) {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;
        return { token: options.token, baseUrl, timeout, retry };
    }
}
exports.default = LocaliseAPI;
