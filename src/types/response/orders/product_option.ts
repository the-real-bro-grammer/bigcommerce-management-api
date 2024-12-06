export interface ProductOption {
    id: number;
    option_id: number;
    order_product_id: number;
    product_option_id: number;
    display_name: string;
    display_name_customer?: string;
    display_name_merchant?: string;
    display_value: string;
    display_value_customer?: string;
    display_value_merchant?: string;
    value: string;
    type: string;
    name: string;
    display_style: string;
}
