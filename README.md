## crossencoder

### Install

```
npm i crossencoder
```

### Usage

```
import { CrossEncoder } from 'crossencoder';

const encoder = new CrossEncoder('./spm.model');

const ids = await encoder.encode("a", [
  "a b",
  "a b c",
]);
```

### Inspiration

With credit to:

https://github.com/JanKaul/sentencepiece