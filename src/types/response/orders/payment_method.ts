export interface BcPaymentMethod {
    id: string;
    name: string;
    type: string;
    gateway: string;
    logo: string;
    enabled: boolean;
    config: any;
}

export enum BcPaymentMethodValue {
    CreditCard = 'Credit Card',
    Cash = 'Cash',
    TestPaymentGateway = 'Test Payment Gateway',
    Manual = 'Manual'
}
