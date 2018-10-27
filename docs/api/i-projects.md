# Table of contents

* [i-projects.ts][SourceFile-6]
    * Interfaces
        * [IProjects][InterfaceDeclaration-14]

# i-projects.ts

## Interfaces

### IProjects

```typescript
interface IProjects {
    list(query?: IProjectQuery): Promise<{ projects: IProject[]; }>;
    get(projectId: string): Promise<IProject>;
    create(body: object): Promise<IProject>;
    update(projectId: string, body: object): Promise<IProject>;
    empty(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
    delete(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
}
```
#### Method

```typescript
list(query?: IProjectQuery): Promise<{ projects: IProject[]; }>;
```

**Parameters**

| Name  | Type                                     |
| ----- | ---------------------------------------- |
| query | [IProjectQuery][InterfaceDeclaration-15] |

**Return type**

Promise<{ projects: [IProject][InterfaceDeclaration-16][]; }>

```typescript
get(projectId: string): Promise<IProject>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

```typescript
create(body: object): Promise<IProject>;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| body | object |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

```typescript
update(projectId: string, body: object): Promise<IProject>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

```typescript
empty(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<{ project_id: string; keys_deleted: boolean; }>

```typescript
delete(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<{ project_id: string; keys_deleted: boolean; }>


[SourceFile-6]: i-projects.md#i-projectsts
[InterfaceDeclaration-14]: i-projects.md#iprojects
[InterfaceDeclaration-15]: i-project.md#iprojectquery
[InterfaceDeclaration-16]: i-project.md#iproject
[InterfaceDeclaration-16]: i-project.md#iproject
[InterfaceDeclaration-16]: i-project.md#iproject
[InterfaceDeclaration-16]: i-project.md#iproject