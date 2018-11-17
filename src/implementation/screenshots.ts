import {IScreenshots} from '../api/i-screenshots';
import {IPage} from '../params/i-page';
import {IScreenshot} from '../model/i-screenshot';
import {Base} from '../internal/base';
import {validateProjectId} from '../validators/common';

export class Screenshots extends Base implements IScreenshots {
    @validateProjectId
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.get({url: `/projects/${projectId}/screenshots`, query});
    }

    @validateProjectId
    get(projectId: string, screenshotId: number):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.get({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    @validateProjectId
    create(projectId: string, body: object):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.post({body, url: `/projects/${projectId}/screenshots`});
    }

    @validateProjectId
    update(projectId: string, screenshotId, body: object):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.put({body, url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    @validateProjectId
    delete(projectId: string, screenshotId: number):
        Promise<{project_id: string, screenshot_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }
}