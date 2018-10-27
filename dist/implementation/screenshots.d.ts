import { IScreenshots } from '../api/i-screenshots';
import { IPage } from '../params/i-page';
import { IScreenshot } from '../model/i-screenshot';
import { Base } from '../internal/base';
export declare class Screenshots extends Base implements IScreenshots {
    list(projectId: string, query?: IPage): Promise<{
        project_id: string;
        screenshots: IScreenshot[];
    }>;
    get(projectId: string, screenshotId: number): Promise<{
        project_id: string;
        screenshot: IScreenshot;
    }>;
    create(projectId: string, body: object): Promise<{
        project_id: string;
        screenshots: IScreenshot[];
    }>;
    update(projectId: string, screenshotId: any, body: object): Promise<{
        project_id: string;
        screenshot: IScreenshot;
    }>;
    delete(projectId: string, screenshotId: number): Promise<{
        project_id: string;
        screenshot_deleted: boolean;
    }>;
}
