# Table of contents

* [i-key.ts][SourceFile-47]
    * Interfaces
        * [IKeyQuery][InterfaceDeclaration-10]

# i-key.ts

## Interfaces

### IKeyQuery

```typescript
interface IKeyQuery extends IPage {
    include_translations: string;
    include_comments: string;
    include_screenshots: string;
    filter_tags: string;
    filter_keys: string;
    filter_key_ids: string;
    filter_platforms: string;
    filter_placeholder_mismatch: string;
}
```

**Extends**

[IPage][InterfaceDeclaration-2]

**Properties**

| Name                        | Type   | Optional |
| --------------------------- | ------ | -------- |
| include_translations        | string | false    |
| include_comments            | string | false    |
| include_screenshots         | string | false    |
| filter_tags                 | string | false    |
| filter_keys                 | string | false    |
| filter_key_ids              | string | false    |
| filter_platforms            | string | false    |
| filter_placeholder_mismatch | string | false    |

[SourceFile-47]: i-key.md#i-keyts
[InterfaceDeclaration-10]: i-key.md#ikeyquery
[InterfaceDeclaration-2]: i-page.md#ipage