"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Comments extends base_1.Base {
    list(projectId, keyId, query) {
        const url = keyId
            ? `/projects/${projectId}/keys/${keyId}/comments`
            : `/projects/${projectId}/comments`;
        return this.request.get({ url, query });
    }
    get(projectId, keyId, commentId) {
        return this.request.get({ url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}` });
    }
    create(projectId, keyId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/keys/${keyId}/comments` });
    }
    delete(projectId, keyId, commentId) {
        return this.request.delete({ url: `/projects/${projectId}/keys/${keyId}/comments/${commentId}` });
    }
}
exports.Comments = Comments;
