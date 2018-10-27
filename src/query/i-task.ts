import {IPage} from '../params/i-page';

export interface ITaskQuery extends IPage {
    filter_title: string;
}