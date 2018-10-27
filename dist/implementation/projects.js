"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Projects extends base_1.Base {
    list(query) {
        return this.request.get({ url: `/projects`, query });
    }
    get(projectId) {
        return this.request.get({ url: `/projects/${projectId}` });
    }
    create(body) {
        return this.request.post({ body, url: `/projects` });
    }
    update(projectId, body) {
        return this.request.put({ body, url: `/projects/${projectId}` });
    }
    empty(projectId) {
        return this.request.put({ body: {}, url: `/projects/${projectId}/empty` });
    }
    delete(projectId) {
        return this.request.delete({ url: `/projects/${projectId}` });
    }
}
exports.Projects = Projects;
