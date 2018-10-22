"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comments_1 = require("./implementation/comments");
const request_1 = require("./internal/request");
class LocaliseAPI {
    constructor(options) {
        this.BASE_URL = 'https://api.lokalise.co/api2';
        this.TIMEOUT = 10000;
        this.RETRY = 2;
        this.request = new request_1.Request(this.parseOptions(options));
        this.comments = new comments_1.Comments(this.request);
    }
    parseOptions(options) {
        const baseUrl = options.baseUrl || this.BASE_URL;
        const timeout = options.timeout || this.TIMEOUT;
        const retry = options.retry || this.RETRY;
        return { token: options.token, baseUrl, timeout, retry };
    }
}
exports.default = LocaliseAPI;
