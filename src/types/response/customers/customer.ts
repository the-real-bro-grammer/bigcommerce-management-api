export class BcCustomer implements Identifiable, DateTrackable {
    date_created: string;
    date_modified: string;
    id: number;
    company: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    store_credit: number;
    registration_ip_address: string;
    customer_group_id: number;
    notes: string;
    tax_exempt_category: string;
    reset_pass_on_login: boolean;
    accepts_product_review_abandoned_cart_emails: boolean;
    custom_fields: CustomField[];
}
