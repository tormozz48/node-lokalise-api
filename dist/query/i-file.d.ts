import { IPage } from '../params/i-page';
export interface IFileQuery extends IPage {
    filter_filename: string;
}
