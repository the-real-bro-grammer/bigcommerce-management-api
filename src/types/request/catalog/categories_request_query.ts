import { BcBaseQueryOptions } from '../base_query_options';

export class BcCategoriesRequestQuery extends BcBaseQueryOptions {
    id?: number;
    'id:in'?: number[];
    'id:not_in'?: number[];
    'id:min'?: number[];
    'id:max'?: number[];
    'id:greater'?: number[];
    'id:less'?: number[];
    name?: string;
    'name:like'?: string[];
    parent_id?: number;
    'parent_id:in'?: number[];
    'parent_id:min'?: number[];
    'parent_id:max'?: number[];
    'parent_id:greater'?: number[];
    'parent_id:less'?: number[];
    page_title?: string;
    'page_title:like'?: string[];
    keyword?: string;
    is_visible?: boolean;
    page?: number;
    limit?: number;
    include_fields?: string;
    exclude_fields?: string;
}
