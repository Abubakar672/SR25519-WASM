import * as wasm from './sr25519_bg.wasm';

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} pair
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function derive_keypair_hard(pair, cc) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        var ptr0 = passArray8ToWasm0(pair, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(cc, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.derive_keypair_hard(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} pair
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function derive_keypair_soft(pair, cc) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        var ptr0 = passArray8ToWasm0(pair, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(cc, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.derive_keypair_soft(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* Perform a derivation on a publicKey
*
* * pubkey: UIntArray with 32 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector is the derived publicKey as a array of 32 bytes
* @param {Uint8Array} public_key
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function derive_public_soft(public_key, cc) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        var ptr0 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(cc, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.derive_public_soft(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* Generate a key pair.
*
* * seed: UIntArray with 32 element
*
* returned vector is the concatenation of first the private key (64 bytes)
* followed by the public key (32) bytes.
* @param {Uint8Array} seed
* @returns {Uint8Array}
*/
export function keypair_from_seed(seed) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        var ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.keypair_from_seed(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* Sign a message
*
* The combination of both public and private key must be provided.
* This is effectively equivalent to a keypair.
*
* * public: UIntArray with 32 element
* * private: UIntArray with 64 element
* * message: Arbitrary length UIntArray
*
* * returned vector is the signature consisting of 64 bytes.
* @param {Uint8Array} context
* @param {Uint8Array} public_key
* @param {Uint8Array} secret_key
* @param {Uint8Array} message
* @returns {Uint8Array}
*/
export function sign(context, public_key, secret_key, message) {
    try {
        const retptr = wasm.__wbindgen_export_0.value - 16;
        wasm.__wbindgen_export_0.value = retptr;
        var ptr0 = passArray8ToWasm0(context, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passArray8ToWasm0(secret_key, wasm.__wbindgen_malloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.sign(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v4 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v4;
    } finally {
        wasm.__wbindgen_export_0.value += 16;
    }
}

/**
* Verify a message and its corresponding against a public key;
*
* * signature: UIntArray with 64 element
* * message: Arbitrary length UIntArray
* * pubkey: UIntArray with 32 element
* @param {Uint8Array} context
* @param {Uint8Array} signature
* @param {Uint8Array} message
* @param {Uint8Array} public_key
* @returns {boolean}
*/
export function verify(context, signature, message, public_key) {
    var ptr0 = passArray8ToWasm0(context, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(signature, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passArray8ToWasm0(public_key, wasm.__wbindgen_malloc);
    var len3 = WASM_VECTOR_LEN;
    var ret = wasm.verify(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return ret !== 0;
}

