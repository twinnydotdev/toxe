/// <reference types="node" />
declare module "txe" {
  export class Txe {
    private modelPath;
    private spp;
    constructor(modelPath: string): Txe;
    loadModel(): Promise<typeof spp>;
    pad(length: number, ids: number[]): number[];
    encodeSample(sample: string): Promise<number[]>;
    encodeSamples(samples: string[]): Promise<number[][]>;
    encode(sample: string, samples: string[]): Promise<number[]>;
  }
}
