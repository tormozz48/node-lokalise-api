# Table of contents

* [i-contributors.ts][SourceFile-2]
    * Interfaces
        * [IContributors][InterfaceDeclaration-4]

# i-contributors.ts

## Interfaces

### IContributors

```typescript
interface IContributors {
    list(projectId: string, query?: IPage): Promise<{ project_id: string; contributors: IContributor[]; }>;
    get(projectId: string, contributorId: string): Promise<{ project_id: string; contributor: IContributor; }>;
    create(projectId: string, body: object): Promise<{ contributors: IContributor[]; }>;
    update(projectId: string, contributorId: string, body: object): Promise<{ project_id: string; contributor: IContributor; }>;
    delete(projectId: string, contributorId: string): Promise<{ project_id: string; contributor_deleted: boolean; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IPage): Promise<{ project_id: string; contributors: IContributor[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; contributors: [IContributor][InterfaceDeclaration-5][]; }>

```typescript
get(projectId: string, contributorId: string): Promise<{ project_id: string; contributor: IContributor; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |

**Return type**

Promise<{ project_id: string; contributor: [IContributor][InterfaceDeclaration-5]; }>

```typescript
create(projectId: string, body: object): Promise<{ contributors: IContributor[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ contributors: [IContributor][InterfaceDeclaration-5][]; }>

```typescript
update(projectId: string, contributorId: string, body: object): Promise<{ project_id: string; contributor: IContributor; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |
| body          | object |

**Return type**

Promise<{ project_id: string; contributor: [IContributor][InterfaceDeclaration-5]; }>

```typescript
delete(projectId: string, contributorId: string): Promise<{ project_id: string; contributor_deleted: boolean; }>;
```

**Parameters**

| Name          | Type   |
| ------------- | ------ |
| projectId     | string |
| contributorId | string |

**Return type**

Promise<{ project_id: string; contributor_deleted: boolean; }>


[SourceFile-2]: i-contributors.md#i-contributorsts
[InterfaceDeclaration-4]: i-contributors.md#icontributors
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-5]: i-contributor.md#icontributor
[InterfaceDeclaration-5]: i-contributor.md#icontributor
[InterfaceDeclaration-5]: i-contributor.md#icontributor
[InterfaceDeclaration-5]: i-contributor.md#icontributor