interface Option extends Identifiable, DateTrackable {
    name: string;
    type: string;
    display_name: string;
    sort_order: number;
    is_required: boolean;
    values: OptionValue[];
}
