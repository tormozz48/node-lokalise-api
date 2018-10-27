"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Teams extends base_1.Base {
    list(query) {
        return this.request.get({ url: `/teams`, query });
    }
}
exports.Teams = Teams;
