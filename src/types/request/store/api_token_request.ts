export interface BcApiTokenRequest {
    channel_id: number;
    expires_at: number;
    allowed_cors_origins: Array<string>;
}
