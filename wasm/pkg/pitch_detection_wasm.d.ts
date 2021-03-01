/* tslint:disable */
/* eslint-disable */
/**
*/
export class AutocorrelationDetector {
  free(): void;
/**
* @param {number} size
* @param {number} padding
* @returns {AutocorrelationDetector}
*/
  static new(size: number, padding: number): AutocorrelationDetector;
/**
* @param {Float32Array} signal
* @param {number} sample_rate
* @param {number} power_threshold
* @param {number} clarity_threshold
* @param {Float32Array} pitch
*/
  get_pitch(signal: Float32Array, sample_rate: number, power_threshold: number, clarity_threshold: number, pitch: Float32Array): void;
}
/**
*/
export class McLeodDetector {
  free(): void;
/**
* @param {number} size
* @param {number} padding
* @returns {McLeodDetector}
*/
  static new(size: number, padding: number): McLeodDetector;
/**
* @param {Float32Array} signal
* @param {number} sample_rate
* @param {number} power_threshold
* @param {number} clarity_threshold
* @param {Float32Array} pitch
*/
  get_pitch(signal: Float32Array, sample_rate: number, power_threshold: number, clarity_threshold: number, pitch: Float32Array): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_autocorrelationdetector_free: (a: number) => void;
  readonly autocorrelationdetector_new: (a: number, b: number) => number;
  readonly autocorrelationdetector_get_pitch: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly __wbg_mcleoddetector_free: (a: number) => void;
  readonly mcleoddetector_new: (a: number, b: number) => number;
  readonly mcleoddetector_get_pitch: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
