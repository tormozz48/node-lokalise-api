# Table of contents

* [i-languages.ts][SourceFile-5]
    * Interfaces
        * [ILanguages][InterfaceDeclaration-12]

# i-languages.ts

## Interfaces

### ILanguages

```typescript
interface ILanguages {
    list(projectId?: string, query?: IPage): Promise<{ project_id?: string; languages: ILanguage[]; }>;
    get(projectId: string, langId: string): Promise<{ project_id: string; language: ILanguage; }>;
    create(projectId: string, body: object): Promise<{ project_id: string; languages: ILanguage[]; }>;
    update(projectId: string, langId: string, body: object): Promise<{ project_id: string; language: ILanguage; }>;
    delete(projectId: string, langId: string): Promise<{ project_id: string; language_deleted: boolean; }>;
}
```
#### Method

```typescript
list(projectId?: string, query?: IPage): Promise<{ project_id?: string; languages: ILanguage[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id?: string; languages: [ILanguage][InterfaceDeclaration-13][]; }>

```typescript
get(projectId: string, langId: string): Promise<{ project_id: string; language: ILanguage; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |

**Return type**

Promise<{ project_id: string; language: [ILanguage][InterfaceDeclaration-13]; }>

```typescript
create(projectId: string, body: object): Promise<{ project_id: string; languages: ILanguage[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; languages: [ILanguage][InterfaceDeclaration-13][]; }>

```typescript
update(projectId: string, langId: string, body: object): Promise<{ project_id: string; language: ILanguage; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |
| body      | object |

**Return type**

Promise<{ project_id: string; language: [ILanguage][InterfaceDeclaration-13]; }>

```typescript
delete(projectId: string, langId: string): Promise<{ project_id: string; language_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |

**Return type**

Promise<{ project_id: string; language_deleted: boolean; }>


[SourceFile-5]: i-languages.md#i-languagests
[InterfaceDeclaration-12]: i-languages.md#ilanguages
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-13]: i-language.md#ilanguage
[InterfaceDeclaration-13]: i-language.md#ilanguage
[InterfaceDeclaration-13]: i-language.md#ilanguage
[InterfaceDeclaration-13]: i-language.md#ilanguage