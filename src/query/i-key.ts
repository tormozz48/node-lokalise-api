import {IPage} from '../params/i-page';

export interface IKeyQuery extends IPage {
    include_translations?: string;
    include_comments?: string;
    include_screenshots?: string;
    filter_tags?: string;
    filter_keys?: string;
    filter_key_ids?: string;
    filter_platforms?: string;
    filter_placeholder_mismatch?: string;
}
