## txe

### Install

```
npm i txe
```

### Usage

```
import { Txe } from 'txe';

const txe = new Txe('./spm.model');

const ids = await txe.encode("a", [
  "a b",
  "a b c",
]);
```

### Credits

https://github.com/JanKaul/sentencepiece

