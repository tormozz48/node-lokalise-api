# Table of contents

* [i-translation.ts][SourceFile-39]
    * Interfaces
        * [ITranslation][InterfaceDeclaration-29]

# i-translation.ts

## Interfaces

### ITranslation

```typescript
interface ITranslation {
    translation_id: number;
    key_id: number;
    language_iso: string;
    modified_at: string;
    modified_by: number;
    modified_by_email: string;
    translation: string;
    is_fuzzy: boolean;
    is_reviewed: boolean;
    words: number;
}
```

**Properties**

| Name              | Type    | Optional |
| ----------------- | ------- | -------- |
| translation_id    | number  | false    |
| key_id            | number  | false    |
| language_iso      | string  | false    |
| modified_at       | string  | false    |
| modified_by       | number  | false    |
| modified_by_email | string  | false    |
| translation       | string  | false    |
| is_fuzzy          | boolean | false    |
| is_reviewed       | boolean | false    |
| words             | number  | false    |

[SourceFile-39]: i-translation.md#i-translationts
[InterfaceDeclaration-29]: i-translation.md#itranslation