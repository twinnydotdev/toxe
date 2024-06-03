## xt

### Install

```
npm i xt
```

### Usage

```
import { Xt } from 'xt';

const xt = new Xt('./spm.model');

const ids = await xt.encode("a", [
  "a b",
  "a b c",
]);
```

### Credits

https://github.com/JanKaul/sentencepiece

