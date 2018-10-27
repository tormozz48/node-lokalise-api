"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Files extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/files`, query });
    }
    upload(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/files/upload` });
    }
    download(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/files/download` });
    }
}
exports.Files = Files;
