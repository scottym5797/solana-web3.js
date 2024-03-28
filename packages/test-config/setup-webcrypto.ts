import crypto from 'node:crypto';

if (typeof globalThis.crypto === 'undefined') {
    Object.defineProperty(globalThis, 'crypto', {
        value: require("crypto").webcrypto,
        writable: true, // Allow tests to delete it.
    });
}
if (typeof globalThis.crypto.subtle === 'undefined') {
    Object.defineProperty(globalThis.crypto, 'subtle', {
        value: require("crypto").webcrypto.subtle,
    });
}
