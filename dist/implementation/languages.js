"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Languages extends base_1.Base {
    list(projectId, query) {
        const url = projectId
            ? `/projects/${projectId}/languages`
            : `/system/languages`;
        return this.request.get({ url, query });
    }
    get(projectId, langId) {
        return this.request.get({ url: `/projects/${projectId}/languages/${langId}` });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/languages` });
    }
    update(projectId, langId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/languages/${langId}` });
    }
    delete(projectId, langId) {
        return this.request.delete({ url: `/projects/${projectId}/languages/${langId}` });
    }
}
exports.Languages = Languages;
