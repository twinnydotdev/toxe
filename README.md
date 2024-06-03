## xt

### Install

```
npm i xt
```

### Usage (Tokenizer)

```
import { CrossEncoder } from 'xt';

const encoder = new CrossEncoder('./spm.model');

await encoder.loadModel()

const ids = await encoder.encode("a", [
  "a b",
  "a b c",
]);
```

### Inspiration

With credit to:

https://github.com/JanKaul/sentencepiece

### Todo

- Add inference method or rename package 
