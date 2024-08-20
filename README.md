## toxe

### Install

```
npm i toxe
```

### Usage

```
import { Toxe } from 'toxe';

const toxe = new Toxe('./spm.model', {
  bos: 1,
  eos: 2
});

const ids = await toxe.encode("a", [
  "a b",
  "a b c",
]);
```

### Credits

https://github.com/JanKaul/sentencepiece
