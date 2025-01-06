import { domain, scheme, stores } from '@root/paths.json';
import { Store } from '@root/src/types';
import { BasicFetchWebService, WebRequest, WebResponse } from 'easy-peasy-api';

/**
 * Class representing an HTTP client for BigCommerce API interactions.
 */
export class BigCommerceHttpClient extends BasicFetchWebService {
    store: Store;

    /**
     * Authenticates the client with the given store details.
     *
     * **Parameters:**
     * - `store`: The store object containing authentication details.
     *
     * @param store - The store object to authenticate the client.
     */
    public authenticate(store: Store) {
        this.store = store;
    }

    /**
     * Makes an HTTP fetch call with the specified request details and method.
     *
     * **Query Params:**
     * - `request`: The request object containing headers and other data.
     * - `method`: The HTTP method to be used (e.g., 'GET', 'POST').
     *
     * @template TRequest - The type of the request object, extending WebRequest.
     * @template TResponse - The type of the response object, extending WebResponse.
     * @param {TRequest} request - The request object details.
     * @param {string} method - The HTTP method for the request.
     * @returns {Promise<TResponse>} A promise that resolves to the response object.
     */
    protected call<TRequest extends WebRequest, TResponse extends WebResponse>(
        request: TRequest,
        method: string
    ): Promise<TResponse> {
        if (!this.store) {
            throw new Error(
                'Store is not authenticated. You must call authenticate() before using BigCommerceHttpClient'
            );
        }

        return super.call(request, method);
    }

    /**
     * Builds the custom headers for the request initiated by the client.
     *
     * **Query Params:**
     * - `headers`: An object containing key-value pairs to be set in request headers.
     *
     * @param headers - Headers to be included in the request.
     * @returns The processed headers object.
     */
    protected override buildHeader(headers: {}): {} {
        return {
            headers: {
                ...headers,
                ...this.buildStoreHeader()
            }
        };
    }

    /**
     * Constructs the complete URL for the HTTP request based on the provided request object.
     *
     * **Query Params:**
     * - `request`: The request object with URI components.
     *
     * @template TRequest - The type of the request object, extending WebRequest.
     * @param request - The request object to build the URL from.
     * @returns The constructed URL as a string.
     */
    protected override buildUrl<TRequest extends WebRequest>(request: TRequest): string {
        request.uri.scheme = scheme;
        request.uri.domain = domain;
        request.uri.path = `${stores.path}/${request.uri.path}`;
        request.uri.path = request.uri.path.replace('{store_hash}', this.store.hash);

        return super.buildUrl(request);
    }

    /**
     * Builds the store-specific headers required for authenticating requests.
     *
     * @returns An object containing store-specific headers.
     */
    private buildStoreHeader() {
        return {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-Auth-Token': this.store.access_token
        };
    }
}
