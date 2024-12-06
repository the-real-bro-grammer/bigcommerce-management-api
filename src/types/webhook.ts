interface Webhook extends Identifiable, DateTrackable {
    scope: string;
    destination: string;
    is_active: boolean;
    headers: Record<string, string>;
}
