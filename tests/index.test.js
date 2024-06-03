const { Txe } = require("../index");
const path = require("path");

describe("Txe", () => {
  let txe;

  beforeAll(async () => {
    txe = new Txe(path.join(__dirname, "spm.model"))
  });

  test("Encodes a sample correctly", async () => {
    const ids = await txe.encodeSample("This is a sample.");
    expect(ids).toEqual([
      13, 1, 4398,
      25, 21, 5717,
      9
    ]);
  });

  test("Encodes samples correctly", async () => {
    const ids = await txe.encodeSamples(["Sample 1", "Sample 2"]);
    expect(ids).toEqual([[13, 1, 765, 5106, 137], [13, 1, 765, 5106, 172]]);
  });

  test("Pads samples correctly", () => {
    const paddedSamples = txe.pad(5, [1, 2, 3]);
    expect(paddedSamples).toEqual([1, 2, 3, 0, 0]);
  });

  test("Encodes a sample and samples correctly", async () => {
    const ids = await txe.encode("a", [
      "a b",
      "a b c",
    ]);
    expect(ids).toEqual([
      1, 21, 2, 21, 334,
      0, 21, 334, 272, 2
    ]);
  });
});
