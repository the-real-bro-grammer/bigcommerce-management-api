export interface Coupon extends Identifiable, DateTrackable {
    name: string;
    code: string;
    amount: number;
    type: string;
    enabled: boolean;
    max_uses: number;
    num_uses: number;
    min_purchase: number;
    expires: string;
    restrict_to_items: number[];
    restrict_to_categories: number[];
    coupon_customer_restrictions: number[];
    coupon_shipping_restrictions: string[];
    coupon_shipping_methods: number[];
}
