export enum BcOrderStatusNumber {
    Incomplete = 0,
    Pending = 1,
    Shipped = 2,
    PartiallyShipped = 3,
    Refunded = 4,
    Cancelled = 5,
    Declined = 6,
    AwaitingPayment = 7,
    AwaitingPickup = 8,
    AwaitingShipment = 9,
    Completed = 10,
    AwaitingFulfillment = 11,
    ManualVerificationRequired = 12,
    Disputed = 13,
    PartiallyRefunded = 14
}

export enum BcOrderStatusValue {
    Incomplete = 'Incomplete',
    Pending = 'Pending',
    Shipped = 'Shipped',
    PartiallyShipped = 'Partially Shipped',
    Refunded = 'Refunded',
    Cancelled = 'Cancelled',
    Declined = 'Declined',
    AwaitingPayment = 'Awaiting Payment',
    AwaitingPickup = 'Awaiting Pickup',
    AwaitingShipment = 'Awaiting Shipment',
    Completed = 'Completed',
    AwaitingFulfillment = 'Awaiting Fulfillment',
    ManualVerificationRequired = 'Manual Verification Required',
    Disputed = 'Disputed',
    PartiallyRefunded = 'Partially Refunded'
}
