# Table of contents

* [Translations][ClassDeclaration-13]
    * Methods
        * [list(projectId, query)][MethodDeclaration-49]
        * [get(projectId, translationId)][MethodDeclaration-50]
        * [update(projectId, translationId, body)][MethodDeclaration-51]

# Translations

```typescript
class Translations implements ITranslations
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IPage): Promise<{ project_id: string; translations: ITranslation[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; translations: [ITranslation][InterfaceDeclaration-29][]; }>

----------

### get(projectId, translationId)

```typescript
public get(projectId: string, translationId: string): Promise<{ project_id: string; translation: ITranslation; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| translationId | string |

**Return type**

Promise<{ project_id: string; translation: [ITranslation][InterfaceDeclaration-29]; }>

----------

### update(projectId, translationId, body)

```typescript
public update(projectId: string, translationId: string, body: object): Promise<{ project_id: string; translation: ITranslation; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| translationId | string |
| body          | object |

**Return type**

Promise<{ project_id: string; translation: [ITranslation][InterfaceDeclaration-29]; }>

[ClassDeclaration-13]: translations.md#translations
[MethodDeclaration-49]: translations.md#listprojectid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-29]: ../i-translation.md#itranslation
[MethodDeclaration-50]: translations.md#getprojectid-translationid
[InterfaceDeclaration-29]: ../i-translation.md#itranslation
[MethodDeclaration-51]: translations.md#updateprojectid-translationid-body
[InterfaceDeclaration-29]: ../i-translation.md#itranslation