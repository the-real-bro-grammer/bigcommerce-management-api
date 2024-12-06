interface Address extends Identifiable {
    customer_id: number;
    first_name: string;
    last_name: string;
    company: string;
    street_1: string;
    street_2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    country_iso2: string;
    phone: string;
    address_type: string;
}
