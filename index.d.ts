/// <reference types="node" />
declare module "xt" {
  export class Xt {
    private modelPath;
    private spp;
    constructor(modelPath: string): Xt;
    loadModel(): Promise<typeof spp>;
    pad(length: number, ids: number[]): number[];
    encodeSample(sample: string): Promise<number[]>;
    encodeSamples(samples: string[]): Promise<number[][]>;
    encode(sample: string, samples: string[]): Promise<number[]>;
  }
}
