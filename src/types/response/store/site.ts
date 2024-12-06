export interface BcSite {
    url: string;
    type: BcUrlType;
}

export enum BcUrlType {
    Primary = 'primary',
    Canonical = 'canonical',
    Checkout = 'checkout'
}
