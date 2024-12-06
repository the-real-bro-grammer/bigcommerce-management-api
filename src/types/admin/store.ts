import { User } from './user';

export interface Store {
    access_token: string;
    graph_ql_token: string;
    scope: string;
    user: AuthUser;
    owner: AuthUser;
    context: string;
    sub?: string;
    account_uuid: string;
    store_url: string;
    hash: string;
    hasUpdates: boolean;
}

interface AuthUser extends User {
    username: string;
}
