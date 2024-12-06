import { User } from './user';

export interface UpdateCallback {
    aud: string;
    iss: string;
    iat: number;
    nbf: number;
    exp: number;
    jti: string;
    sub: string;
    user: User;
    owner: UpdateCallbackUser;
    url: string;
    channel_id: any;
}

interface UpdateCallbackUser extends User {
    id: number;
    email: string;
    locale: string;
}
