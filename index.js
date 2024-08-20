const sentencePiece = require('./vendor/sentencepiece')

class Toxe {
  constructor (modelPath, config = {}) {
    this.config = config
    this.modelPath = modelPath
    this.spp = new sentencePiece.SentencePieceProcessor()
    this.loaded = false
  }

  async loadModel () {
    await this.spp.load(this.modelPath)
    this.loaded = true
  }

  pad (length, ids) {
    return [...ids, ...new Array(length - ids.length).fill(0)]
  }

  async encodeSample (sample) {
    if (!this.loaded) await this.loadModel()
    const sampleIds = this.spp.encodeIds(sample, false)
    return sampleIds
  }

  async encodeSamples (samples) {
    if (!this.loaded) await this.loadModel()
    const samplesIds = samples.map(sample => this.spp.encodeIds(sample, false))
    const longestSample = samplesIds.reduce((a, b) => (a.length > b.length ? a : b), [])
    const paddedSamples = samplesIds.map(sampleIds => this.pad(longestSample.length, sampleIds))
    return paddedSamples
  }

  async encode (sample, samples) {
    const { bos = 1, eos = 2 } = this.config
    const sampleIds = await this.encodeSample(sample)
    const paddedSamples = await this.encodeSamples(samples)
    const ids = paddedSamples
      .flatMap(ids => [bos, ...sampleIds, eos, ...ids, eos])
    return ids
  }
}

module.exports = {
  Toxe
}
