# Table of contents

* [i-contributor.ts][SourceFile-29]
    * Interfaces
        * [IContributor][InterfaceDeclaration-5]

# i-contributor.ts

## Interfaces

### IContributor

```typescript
interface IContributor {
    user_id: number;
    email: string;
    fullname: string;
    created_at: string;
    is_admin: boolean;
    is_reviewer: boolean;
    languages: object;
    admin_rights: string[];
}
```

**Properties**

| Name         | Type     | Optional |
| ------------ | -------- | -------- |
| user_id      | number   | false    |
| email        | string   | false    |
| fullname     | string   | false    |
| created_at   | string   | false    |
| is_admin     | boolean  | false    |
| is_reviewer  | boolean  | false    |
| languages    | object   | false    |
| admin_rights | string[] | false    |

[SourceFile-29]: i-contributor.md#i-contributorts
[InterfaceDeclaration-5]: i-contributor.md#icontributor