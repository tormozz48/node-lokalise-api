"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Contributors extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/contributors`, query });
    }
    get(projectId, contributorId) {
        return this.request.get({ url: `/projects/${projectId}/contributors/${contributorId}` });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/contributors` });
    }
    update(projectId, contributorId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/contributors/${contributorId}` });
    }
    delete(projectId, contributorId) {
        return this.request.delete({ url: `/projects/${projectId}/contributors/${contributorId}` });
    }
}
exports.Contributors = Contributors;
