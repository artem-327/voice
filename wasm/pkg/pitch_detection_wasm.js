
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachegetFloat32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
*/
export class AutocorrelationDetector {

    static __wrap(ptr) {
        const obj = Object.create(AutocorrelationDetector.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_autocorrelationdetector_free(ptr);
    }
    /**
    * @param {number} size
    * @param {number} padding
    * @returns {AutocorrelationDetector}
    */
    static new(size, padding) {
        var ret = wasm.autocorrelationdetector_new(size, padding);
        return AutocorrelationDetector.__wrap(ret);
    }
    /**
    * @param {Float32Array} signal
    * @param {number} sample_rate
    * @param {number} power_threshold
    * @param {number} clarity_threshold
    * @param {Float32Array} pitch
    */
    get_pitch(signal, sample_rate, power_threshold, clarity_threshold, pitch) {
        try {
            var ptr0 = passArrayF32ToWasm0(signal, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passArrayF32ToWasm0(pitch, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.autocorrelationdetector_get_pitch(this.ptr, ptr0, len0, sample_rate, power_threshold, clarity_threshold, ptr1, len1);
        } finally {
            pitch.set(getFloat32Memory0().subarray(ptr1 / 4, ptr1 / 4 + len1));
            wasm.__wbindgen_free(ptr1, len1 * 4);
        }
    }
}
/**
*/
export class McLeodDetector {

    static __wrap(ptr) {
        const obj = Object.create(McLeodDetector.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_mcleoddetector_free(ptr);
    }
    /**
    * @param {number} size
    * @param {number} padding
    * @returns {McLeodDetector}
    */
    static new(size, padding) {
        var ret = wasm.mcleoddetector_new(size, padding);
        return McLeodDetector.__wrap(ret);
    }
    /**
    * @param {Float32Array} signal
    * @param {number} sample_rate
    * @param {number} power_threshold
    * @param {number} clarity_threshold
    * @param {Float32Array} pitch
    */
    get_pitch(signal, sample_rate, power_threshold, clarity_threshold, pitch) {
        try {
            var ptr0 = passArrayF32ToWasm0(signal, wasm.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passArrayF32ToWasm0(pitch, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.mcleoddetector_get_pitch(this.ptr, ptr0, len0, sample_rate, power_threshold, clarity_threshold, ptr1, len1);
        } finally {
            pitch.set(getFloat32Memory0().subarray(ptr1 / 4, ptr1 / 4 + len1));
            wasm.__wbindgen_free(ptr1, len1 * 4);
        }
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('pitch_detection_wasm_bg.wasm', import.meta.url);
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;

