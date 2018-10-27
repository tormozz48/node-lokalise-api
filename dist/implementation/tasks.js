"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Tasks extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/tasks`, query });
    }
    get(projectId, taskId) {
        return this.request.get({ url: `/projects/${projectId}/tasks/${taskId}` });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/tasks` });
    }
    update(projectId, taskId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/tasks/${taskId}` });
    }
    delete(projectId, taskId) {
        return this.request.delete({ url: `/projects/${projectId}/tasks/${taskId}` });
    }
}
exports.Tasks = Tasks;
