import { BcBaseQueryOptions } from '../base_query_options';

export class BcCustomersRequestQuery extends BcBaseQueryOptions {
    page?: number;
    limit?: number;
    'id:in'?: string;
    'company:in'?: string;
    'customer_group_id:in'?: string;
    date_created?: string;
    'date_created:max'?: string;
    'date_created:min'?: string;
    date_modified?: string;
    'date_modified:min'?: string;
    'date_modified:max'?: string;
    'email:in'?: string;
    'name:in'?: string;
    'name:like'?: string;
    'registration_ip_address:in'?: string;

    /*
    Indicates whether to include customer sub-resources:
        addresses - customer addresses
        storecredit - store credit
        attributes - customer attributes and address attributes
        formfields - customer and address form fields
        shopper_profile_id - the ID of the shopper profile associated with the customer (Beta)
        segment_ids- segments the customer belongs to (Beta)
        include=addresses,storecredit,attributes,formfields,shopper_profile_id,segment_ids
    */
    include?: string;
    sort?: string;
}
