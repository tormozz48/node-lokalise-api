import {IScreenshots} from '../api/i-screenshots';
import {IPage} from '../params/i-page';
import {IScreenshot} from '../model/i-screenshot';
import {Base} from '../internal/base';
import {validate, checkString as s, checkNumber as n, checkPage} from '../internal/validators';

export class Screenshots extends Base implements IScreenshots {
    @validate
    list(@s projectId: string, @checkPage query?: IPage):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.get({url: `/projects/${projectId}/screenshots`, query});
    }

    @validate
    get(@s projectId: string, @n screenshotId: number):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.get({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    @validate
    create(@s projectId: string, body: object):
        Promise<{project_id: string, screenshots: IScreenshot[]}> {

        return this.request.post({body, url: `/projects/${projectId}/screenshots`});
    }

    @validate
    update(@s projectId: string, @n screenshotId, body: object):
        Promise<{project_id: string, screenshot: IScreenshot}> {

        return this.request.put({body, url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }

    @validate
    delete(@s projectId: string, @n screenshotId: number):
        Promise<{project_id: string, screenshot_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/screenshots/${screenshotId}`});
    }
}