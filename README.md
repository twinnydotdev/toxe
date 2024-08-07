## toxe

### Install

```
npm i toxe
```

### Usage

```
import { Toxe } from 'toxe';

const toxe = new Toxe('./spm.model');

const ids = await toxe.encode("a", [
  "a b",
  "a b c",
]);
```

### Credits

https://github.com/JanKaul/sentencepiece

### TODO

Support passing config.
