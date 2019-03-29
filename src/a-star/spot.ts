
interface SpotParams {
    f: number;
    g: number;
    h: number;
}

export class Spot {
    public f: number
    public g: number
    public h: number

    constructor(params: SpotParams = { f: 0, g: 0, h: 0 }) {
        this.f = params.f
        this.g = params.g
        this.h = params.h
    }
}
