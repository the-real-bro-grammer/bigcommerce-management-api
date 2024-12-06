import { PhysicalDetails } from '../shared/physical_details';
import { BcProduct } from '../shared/product';

export class BcCatalogProduct
    extends BcProduct
    implements PhysicalDetails, Identifiable, DateTrackable
{
    date_created: string;
    date_modified: string;
    width: number;
    depth: number;
    height: number;
    description: string;
    price: number;
    cost_price: number;
    retail_price: number;
    sale_price: number;
    map_price: number;
    calculated_price: number;
    sort_order: number;
    is_visible: boolean;
    is_featured: boolean;
    related_products: number[];
    inventory_level: number;
    inventory_warning_level: number;
    inventory_tracking: string;
    reviews_rating_sum: number;
    reviews_count: number;
    total_sold: number;
    fixed_cost_shipping_price: number;
    is_free_shipping: boolean;
    is_preorder_only: boolean;
    is_price_hidden: boolean;
    price_hidden_label: string;
    layout_file: string;
    product_condition: string;
    show_product_condition: boolean;
    order_quantity_minimum: number;
    order_quantity_maximum: number;
    categories: number[];
    view_count: number;
    redirect_old_url: boolean;
    custom_url?: CustomUrl;
    availability: string;
    availability_description: string;
    gift_wrapping_options_type: string;
    gift_wrapping_options_list: number[];
}
