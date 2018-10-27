"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comments_1 = require("./implementation/comments");
const contributors_1 = require("./implementation/contributors");
const files_1 = require("./implementation/files");
const keys_1 = require("./implementation/keys");
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
    }
    parseOptions(options) {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;
        return { token: options.token, baseUrl, timeout, retry };
    }
}
exports.default = LocaliseAPI;
