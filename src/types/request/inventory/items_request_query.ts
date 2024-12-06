import { BcBaseQueryOptions } from '../base_query_options';

export class BcInventoryItemsRequestQuery extends BcBaseQueryOptions {
    'sku:in'?: string;
    'variant_id:in'?: string;
    'product_id:in'?: string;
    'location_id:in'?: string;
    'location_code:in'?: string;
}
