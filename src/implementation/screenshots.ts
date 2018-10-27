import {IScreenshots} from '../api/i-screenshots';
import {IPage} from '../params/i-page';
import {IScreenshot} from '../model/i-screenshot';
import {Base} from '../internal/base';

export class Screenshots extends Base implements IScreenshots {
    list(projectId: string, query?: IPage):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.get({url: `/projects/${projectId}/screenshots`, query});
    }

    get(projectId: string, screenshotId: number):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.get({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    create(projectId: string, body: object):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.post({body, url: `/projects/${projectId}/screenshots`});
    }

    update(projectId: string, screenshotId, body: object):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.put({body, url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    delete(projectId: string, screenshotId: number):
        Promise<{project_id: string, screenshot_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }
}