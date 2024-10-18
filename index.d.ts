declare module "toxe" {
  interface SentencePiece {
    encodeIds(text: string): number[];
  }

  export class Toxe {
    private modelPath: string;
    private spp: SentencePiece;

    constructor(modelPath: string);

    loadModel(): Promise<SentencePiece>;
    pad(length: number, ids: number[]): number[];
    encodeSample(sample: string): Promise<number[]>;
    encodeSamples(samples: string[]): Promise<number[][]>;
    encode(sample: string, samples: string[]): Promise<number[]>;
  }
}
