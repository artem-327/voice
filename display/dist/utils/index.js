import { OCTAVE_COLORS } from '../constants';
export function noteFromPitch(frequency) {
    let noteNum = 12 * (Math.log(frequency / 440) / Math.log(2));
    return Math.round(noteNum) + 69;
}
export function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
}
export function centsOffFromPitch(frequency, note) {
    return Math.floor(1200 * Math.log(frequency / frequencyFromNoteNumber(note)) / Math.log(2));
}
export function colorFromNote(note) {
    let octave = Math.floor(note / 12) - 1;
    let idx = Math.min(octave, OCTAVE_COLORS.length - 1);
    idx = Math.max(0, idx);
    return OCTAVE_COLORS[idx];
}
