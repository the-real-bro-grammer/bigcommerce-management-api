interface Modifier extends Identifiable, DateTrackable {
    product_id: number;
    name: string;
    display_name: string;
    type: string;
    required: boolean;
    sort_order: number;
    config: any;
    option_values: ModifierOptionValue[];
}
