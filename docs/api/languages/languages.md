# Table of contents

* [Languages][ClassDeclaration-6]
    * Methods
        * [list(projectId, query)][MethodDeclaration-19]
        * [get(projectId, langId)][MethodDeclaration-20]
        * [create(projectId, body)][MethodDeclaration-21]
        * [update(projectId, langId, body)][MethodDeclaration-22]
        * [delete(projectId, langId)][MethodDeclaration-23]

# Languages

```typescript
class Languages implements ILanguages
```
## Methods

### list(projectId, query)

```typescript
public list(projectId?: string, query?: IPage): Promise<{ project_id?: string; languages: ILanguage[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id?: string; languages: [ILanguage][InterfaceDeclaration-13][]; }>

----------

### get(projectId, langId)

```typescript
public get(projectId: string, langId: string): Promise<{ project_id: string; language: ILanguage; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |

**Return type**

Promise<{ project_id: string; language: [ILanguage][InterfaceDeclaration-13]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ project_id: string; languages: ILanguage[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; languages: [ILanguage][InterfaceDeclaration-13][]; }>

----------

### update(projectId, langId, body)

```typescript
public update(projectId: string, langId: string, body: object): Promise<{ project_id: string; language: ILanguage; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |
| body      | object |

**Return type**

Promise<{ project_id: string; language: [ILanguage][InterfaceDeclaration-13]; }>

----------

### delete(projectId, langId)

```typescript
public delete(projectId: string, langId: string): Promise<{ project_id: string; language_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| langId    | string |

**Return type**

Promise<{ project_id: string; language_deleted: boolean; }>

[ClassDeclaration-6]: languages.md#languages
[MethodDeclaration-19]: languages.md#listprojectid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-13]: ../i-language.md#ilanguage
[MethodDeclaration-20]: languages.md#getprojectid-langid
[InterfaceDeclaration-13]: ../i-language.md#ilanguage
[MethodDeclaration-21]: languages.md#createprojectid-body
[InterfaceDeclaration-13]: ../i-language.md#ilanguage
[MethodDeclaration-22]: languages.md#updateprojectid-langid-body
[InterfaceDeclaration-13]: ../i-language.md#ilanguage
[MethodDeclaration-23]: languages.md#deleteprojectid-langid