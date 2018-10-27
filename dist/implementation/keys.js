"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Keys extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/keys`, query });
    }
    get(projectId, keyId) {
        return this.request.get({ url: `/projects/${projectId}/keys/${keyId}` });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/keys` });
    }
    update(projectId, keyId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/keys/${keyId}` });
    }
    updateMany(projectId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/keys` });
    }
    deleteMany(projectId, body) {
        return this.request.delete({ body, url: `/projects/${projectId}/keys` });
    }
    delete(projectId, keyId) {
        return this.request.delete({ url: `/projects/${projectId}/keys/${keyId}` });
    }
}
exports.Keys = Keys;
