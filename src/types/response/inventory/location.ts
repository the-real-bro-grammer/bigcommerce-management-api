import { BcInventoryLocationSettings } from './location_settings';

export class BcInventoryLocation {
    location_id?: number;
    location_code?: string;
    location_name?: string;
    available_to_sell?: number;
    total_inventory_onhand?: number;
    location_enabled?: boolean;
    settings?: BcInventoryLocationSettings;
}
