"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Screenshots extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/screenshots`, query });
    }
    get(projectId, screenshotId) {
        return this.request.get({ url: `/projects/${projectId}/screenshots/${screenshotId}` });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/screenshots` });
    }
    update(projectId, screenshotId, body) {
        return this.request.put({ body, url: `/projects/${projectId}/screenshots/${screenshotId}` });
    }
    delete(projectId, screenshotId) {
        return this.request.delete({ url: `/projects/${projectId}/screenshots/${screenshotId}` });
    }
}
exports.Screenshots = Screenshots;
