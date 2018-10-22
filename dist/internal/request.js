"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require("got");
class Request {
    constructor(options) {
        this.options = options;
    }
    get(params) {
        const options = this.getRequestOptions();
        options.method = 'get';
        options.query = params.query;
        return this.request(params.url, options);
    }
    post(params) {
        const options = this.getRequestOptions();
        options.method = 'post';
        options.body = params.body;
        return this.request(params.url, options);
    }
    put(params) {
        const options = this.getRequestOptions();
        options.method = 'put';
        options.body = params.body;
        return this.request(params.url, options);
    }
    delete(params) {
        const options = this.getRequestOptions();
        options.method = 'delete';
        return this.request(params.url, options);
    }
    request(url, options) {
        console.log(url);
        return got[options.method](url, options)
            .then(({ body }) => body)
            .catch((error) => {
            throw error;
        });
    }
    getRequestOptions() {
        return {
            baseUrl: this.options.baseUrl,
            encoding: 'utf-8',
            json: true,
            headers: this.getHeaders(),
            retry: this.options.retry,
            timeout: this.options.timeout,
        };
    }
    getHeaders() {
        return { 'x-api-token': this.options.token };
    }
}
exports.Request = Request;
