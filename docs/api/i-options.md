# Table of contents

* [i-options.ts][SourceFile-42]
    * Interfaces
        * [IOptions][InterfaceDeclaration-0]

# i-options.ts

## Interfaces

### IOptions

```typescript
interface IOptions {
    readonly token: string;
    readonly timeout?: number;
    readonly retry?: number;
    baseUrl?: string;
}
```

**Properties**

| Name    | Type   | Optional |
| ------- | ------ | -------- |
| token   | string | false    |
| timeout | number | true     |
| retry   | number | true     |
| baseUrl | string | true     |

[SourceFile-42]: i-options.md#i-optionsts
[InterfaceDeclaration-0]: i-options.md#ioptions