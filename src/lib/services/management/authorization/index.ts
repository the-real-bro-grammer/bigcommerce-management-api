import { verifyBcToken } from '@root/src/lib/helpers/auth_helpers';
import { Store } from '@root/src/types';
import QueryParams from '@root/src/types/query';
import * as BigCommerce from 'node-bigcommerce';

/**
 * BigCommerce authorization operations.
 */
export class BigCommerceAuthorizationService {
    clientId: string;
    secret: string;
    callbackUri: string;
    apiVersion: 'v2' | 'v3';

    /**
     * Initialize BigCommerce authorization service.
     *
     * @param clientId - Client ID for BigCommerce API.
     * @param secret - Secret for authentication.
     * @param callbackUri - Callback URI for OAuth flow.
     * @param apiVersion - Version of BigCommerce API ('v2' or 'v3').
     */
    constructor(
        clientId: string,
        secret: string,
        callbackUri: string,
        apiVersion: 'v2' | 'v3' = 'v3'
    ) {
        this.clientId = clientId;
        this.secret = secret;
        this.callbackUri = callbackUri;
        this.apiVersion = apiVersion;
    }

    /**
     * Initializes the BigCommerce client using provided query parameters and authorizes it.
     *
     * **Query Params:**
     * - `query`: An object containing necessary query parameters for authorization.
     *
     * @param query - Query parameters required for initializing the client.
     * @returns Promise that resolves to a Store object.
     */
    public async initializeClient(query: QueryParams): Promise<Store> {
        const client = this.getBigCommerceClient();
        const store: Store = await client.authorize(query);

        this.sanitizeStore(store);

        return store;
    }

    /**
     * Verifies the client using the signed JWT payload.
     *
     * **Query Params:**
     * - `signed_payload_jwt`: JWT token used to verify client identity.
     *
     * @param signed_payload_jwt - The signed payload JWT for verification.
     * @returns Promise that resolves to a Store object or null if verification fails.
     */
    public async verifyClient({ signed_payload_jwt }: QueryParams): Promise<Store> {
        try {
            const store: Store = await verifyBcToken(signed_payload_jwt as string);
            this.sanitizeStore(store);
            return store;
        } catch (error) {
            console.error('Error when verfying client', error);

            return null;
        }
    }

    /**
     * Creates a BigCommerce client instance.
     *
     * @returns A new instance of BigCommerce client with configured options.
     */
    private getBigCommerceClient() {
        return new BigCommerce({
            clientId: this.clientId,
            secret: this.secret,
            callback: this.callbackUri,
            logLevel: process.env.BIG_COMMERCE_LOG_LEVEL ?? 'info',
            responseType: 'json',
            headers: { 'Accept-Encoding': '*' },
            apiVersion: this.apiVersion
        });
    }

    /**
     * Ensures that the store object contains a hash value.
     *
     * @param store - The store object to sanitize.
     */
    private sanitizeStore(store: Store) {
        if (!store.hash) {
            store.hash = (store.context ?? store.sub).replace('stores/', '');
        }
    }
}
