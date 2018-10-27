"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../internal/base");
class Snapshots extends base_1.Base {
    list(projectId, query) {
        return this.request.get({ url: `/projects/${projectId}/snapshots`, query });
    }
    create(projectId, body) {
        return this.request.post({ body, url: `/projects/${projectId}/snapshots` });
    }
    restore(projectId, snapshotId) {
        return this.request.post({ body: {}, url: `/projects/{project_id}/snapshots` });
    }
    delete(projectId, snapshotId) {
        return this.request.delete({ url: `/projects/${projectId}/snapshots/${snapshotId}` });
    }
}
exports.Snapshots = Snapshots;
