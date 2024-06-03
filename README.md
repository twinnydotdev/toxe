## toxe

### Install

```
npm i toxe
```

### Usage

```
import { Txe } from 'toxe';

const toxe = new Txe('./spm.model');

const ids = await toxe.encode("a", [
  "a b",
  "a b c",
]);
```

### Credits

https://github.com/JanKaul/sentencepiece

