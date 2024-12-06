import { BcBaseQueryOptions } from '../base_query_options';

export class BcOrdersRequestQuery extends BcBaseQueryOptions {
    min_id?: number;
    max_id?: number;
    min_total?: number;
    max_total?: number;
    customer_id?: number;
    email?: string;
    status_id?: Array<number>;
    cart_id?: string;
    payment_method?: string;
    min_date_created?: string;
    max_date_created?: string;
    min_date_modified?: string;
    max_date_modified?: string;
    is_deleted?: boolean;
    channel_id?: number;
}
