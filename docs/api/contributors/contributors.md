# Table of contents

* [Contributors][ClassDeclaration-3]
    * Methods
        * [list(projectId, query)][MethodDeclaration-4]
        * [get(projectId, contributorId)][MethodDeclaration-5]
        * [create(projectId, body)][MethodDeclaration-6]
        * [update(projectId, contributorId, body)][MethodDeclaration-7]
        * [delete(projectId, contributorId)][MethodDeclaration-8]

# Contributors

```typescript
class Contributors implements IContributors
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IPage): Promise<{ project_id: string; contributors: IContributor[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; contributors: [IContributor][InterfaceDeclaration-5][]; }>

----------

### get(projectId, contributorId)

```typescript
public get(projectId: string, contributorId: string): Promise<{ project_id: string; contributor: IContributor; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |

**Return type**

Promise<{ project_id: string; contributor: [IContributor][InterfaceDeclaration-5]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ contributors: IContributor[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ contributors: [IContributor][InterfaceDeclaration-5][]; }>

----------

### update(projectId, contributorId, body)

```typescript
public update(projectId: string, contributorId: string, body: object): Promise<{ project_id: string; contributor: IContributor; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |
| body          | object |

**Return type**

Promise<{ project_id: string; contributor: [IContributor][InterfaceDeclaration-5]; }>

----------

### delete(projectId, contributorId)

```typescript
public delete(projectId: string, contributorId: string): Promise<{ project_id: string; contributor_deleted: boolean; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |

**Return type**

Promise<{ project_id: string; contributor_deleted: boolean; }>

[ClassDeclaration-3]: contributors.md#contributors
[MethodDeclaration-4]: contributors.md#listprojectid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-5]: ../i-contributor.md#icontributor
[MethodDeclaration-5]: contributors.md#getprojectid-contributorid
[InterfaceDeclaration-5]: ../i-contributor.md#icontributor
[MethodDeclaration-6]: contributors.md#createprojectid-body
[InterfaceDeclaration-5]: ../i-contributor.md#icontributor
[MethodDeclaration-7]: contributors.md#updateprojectid-contributorid-body
[InterfaceDeclaration-5]: ../i-contributor.md#icontributor
[MethodDeclaration-8]: contributors.md#deleteprojectid-contributorid