import { Store } from '@/types/';
import jwt, { SignOptions } from 'jsonwebtoken';

export function verifyAuthToken(token: string): Store {
    const { BIG_COMMERCE_SECRET } = process.env;
    return verifyToken(BIG_COMMERCE_SECRET, token);
}

export function verifyBcToken(token: string): Store {
    const { BIG_COMMERCE_CLIENT_SECRET } = process.env;
    return verifyToken(BIG_COMMERCE_CLIENT_SECRET, token);
}

export function getEncryptedStoreInfo(store: Store): string {
    const { BIG_COMMERCE_SECRET } = process.env;
    const options: SignOptions = {
        algorithm: 'HS256'
    };

    const signed = jwt.sign(store, BIG_COMMERCE_SECRET, options);

    return signed;
}

function verifyToken<T>(secret: string, token: string): T {
    try {
        const result = jwt.verify(token, secret);

        return {
            ...result
        };
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            // Handle JWT errors (e.g., invalid token, expired token)
            console.error('Invalid token:', error.message);
        } else if (error instanceof jwt.NotBeforeError) {
            // Handle "not before" errors
            console.error('Token not yet valid:', error.message);
        } else if (error instanceof jwt.TokenExpiredError) {
            // Handle expired token errors
            console.error('Token expired:', error.message);
        } else {
            // Handle other unexpected errors
            console.error('Error verifying token:', error.message);
        }

        return null;
    }
}
