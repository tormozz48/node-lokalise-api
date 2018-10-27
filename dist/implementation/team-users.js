"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class TeamUsers extends base_1.Base {
    list(teamId, query) {
        return this.request.get({ url: `/teams/${teamId}/users`, query });
    }
    get(teamId, userId) {
        return this.request.get({ url: `/teams/${teamId}/users/${userId}` });
    }
    update(teamId, userId, body) {
        return this.request.put({ body, url: `/teams/${teamId}/users/${userId}` });
    }
    delete(teamId, userId) {
        return this.request.delete({ url: `/teams/${teamId}/users/${userId}` });
    }
}
exports.TeamUsers = TeamUsers;
