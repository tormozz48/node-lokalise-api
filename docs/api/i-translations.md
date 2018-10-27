# Table of contents

* [i-translations.ts][SourceFile-12]
    * Interfaces
        * [ITranslations][InterfaceDeclaration-28]

# i-translations.ts

## Interfaces

### ITranslations

```typescript
interface ITranslations {
    list(projectId: string, query?: IPage): Promise<{ project_id: string; translations: ITranslation[]; }>;
    get(projectId: string, translationId: string): Promise<{ project_id: string; translation: ITranslation; }>;
    update(projectId: string, translationId: string, body: object): Promise<{ project_id: string; translation: ITranslation; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IPage): Promise<{ project_id: string; translations: ITranslation[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; translations: [ITranslation][InterfaceDeclaration-29][]; }>

```typescript
get(projectId: string, translationId: string): Promise<{ project_id: string; translation: ITranslation; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| translationId | string |

**Return type**

Promise<{ project_id: string; translation: [ITranslation][InterfaceDeclaration-29]; }>

```typescript
update(projectId: string, translationId: string, body: object): Promise<{ project_id: string; translation: ITranslation; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| translationId | string |
| body          | object |

**Return type**

Promise<{ project_id: string; translation: [ITranslation][InterfaceDeclaration-29]; }>


[SourceFile-12]: i-translations.md#i-translationsts
[InterfaceDeclaration-28]: i-translations.md#itranslations
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-29]: i-translation.md#itranslation
[InterfaceDeclaration-29]: i-translation.md#itranslation
[InterfaceDeclaration-29]: i-translation.md#itranslation