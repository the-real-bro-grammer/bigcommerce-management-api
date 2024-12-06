export interface Brand extends Identifiable, DateTrackable {
    name: string;
    image_file: string;
    search_keywords: string;
    custom_url?: CustomUrl;
}
