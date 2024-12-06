export class BcCategory implements Identifiable, DateTrackable {
    date_created: string;
    date_modified: string;
    id: number;
    parent_id: number;
    name: string;
    description: string;
    sort_order: number;
    page_title: string;
    meta_keywords: string[];
    meta_description: string;
    layout_file: string;
    image_file: string;
    is_visible: boolean;
    search_keywords: string;
    custom_url?: CustomUrl;
}
