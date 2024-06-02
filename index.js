const sentencePiece = require('./vendor/sentencepiece')

class CrossEncoder {
  constructor (modelPath) {
    this.modelPath = modelPath
    this.spp = new sentencePiece.SentencePieceProcessor()
    this.loadModel()
  }

  async loadModel () {
    await this.spp.load(this.modelPath)
  }

  pad (length, ids) {
    return [...ids, ...new Array(length - ids.length).fill(0)]
  }

  async encodeSample (sample) {
    const sampleIds = this.spp.encodeIds(sample, false)
    return sampleIds
  }

  async encodeSamples (samples) {
    const samplesIds = samples.map(sample => this.spp.encodeIds(sample, false))
    const longestSample = samplesIds.reduce((a, b) => (a.length > b.length ? a : b), [])
    const paddedSamples = samplesIds.map(sampleIds => this.pad(longestSample.length, sampleIds))
    return paddedSamples
  }

  async encode (sample, samples) {
    const sampleIds = await this.encodeSample(sample)
    const paddedSamples = await this.encodeSamples(samples)
    const ids = [1, ...sampleIds, 2, ...paddedSamples.flat(), 2]
    return ids
  }
}

module.exports = {
  CrossEncoder
}
