import { ShipmentItem } from './shipment_item';

export interface Shipment extends Identifiable, DateTrackable {
    order_id: number;
    customer_id: number;
    order_address_id: number;
    shipping_provider: string;
    shipping_method: string;
    tracking_number: string;
    tracking_carrier: string;
    tracking_url: string;
    items: ShipmentItem[];
}
