import { ScaleLinear } from 'd3-scale';
interface IFrequency {
    frequency: number;
    clarity: number;
    time: number;
}
declare class PitchDisplay {
    scaleX: ScaleLinear<number, number>;
    scaleY: ScaleLinear<number, number>;
    now: number;
    container: HTMLElement;
    bgCanvas: HTMLCanvasElement;
    noteCanvas: HTMLCanvasElement;
    bgContext: CanvasRenderingContext2D;
    noteContext: CanvasRenderingContext2D;
    timeSpan: number;
    timeOffset: number;
    frequencies: IFrequency[];
    background: string;
    highlight: string;
    constructor(container: HTMLElement, timeSpan?: number, timeOffset?: number);
    resize(): void;
    pushFrequency(frequency: IFrequency): void;
    cleanupFrequencies(): void;
    render(full?: boolean): void;
    setBackgroundColor(color: string): void;
    setHighlightColor(color: string): void;
    drawBackground(): void;
    drawNotes(): void;
}
export { PitchDisplay };
