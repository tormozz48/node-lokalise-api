"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Translations extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/translations`, query });
    }
    get(projectId, translationId) {
        return this.request.get({ url: `/projects/${projectId}/translations/${translationId}` });
    }
    update(projectId, translationId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/translations/${translationId}` });
    }
}
exports.Translations = Translations;
