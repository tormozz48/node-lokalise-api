# Table of contents

* [Projects][ClassDeclaration-7]
    * Methods
        * [list(query)][MethodDeclaration-24]
        * [get(projectId)][MethodDeclaration-25]
        * [create(body)][MethodDeclaration-26]
        * [update(projectId, body)][MethodDeclaration-27]
        * [empty(projectId)][MethodDeclaration-28]
        * [delete(projectId)][MethodDeclaration-29]

# Projects

```typescript
class Projects implements IProjects
```
## Methods

### list(query)

```typescript
public list(query?: IProjectQuery): Promise<{ projects: IProject[]; }>;
```

**Parameters**

| Name  | Type                                     |
| ----- | ---------------------------------------- |
| query | [IProjectQuery][InterfaceDeclaration-15] |

**Return type**

Promise<{ projects: [IProject][InterfaceDeclaration-16][]; }>

----------

### get(projectId)

```typescript
public get(projectId: string): Promise<IProject>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

----------

### create(body)

```typescript
public create(body: object): Promise<IProject>;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| body | object |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

----------

### update(projectId, body)

```typescript
public update(projectId: string, body: object): Promise<IProject>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<[IProject][InterfaceDeclaration-16]>

----------

### empty(projectId)

```typescript
public empty(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<{ project_id: string; keys_deleted: boolean; }>

----------

### delete(projectId)

```typescript
public delete(projectId: string): Promise<{ project_id: string; keys_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |

**Return type**

Promise<{ project_id: string; keys_deleted: boolean; }>

[ClassDeclaration-7]: projects.md#projects
[MethodDeclaration-24]: projects.md#listquery
[InterfaceDeclaration-15]: ../i-project.md#iprojectquery
[InterfaceDeclaration-16]: ../i-project.md#iproject
[MethodDeclaration-25]: projects.md#getprojectid
[InterfaceDeclaration-16]: ../i-project.md#iproject
[MethodDeclaration-26]: projects.md#createbody
[InterfaceDeclaration-16]: ../i-project.md#iproject
[MethodDeclaration-27]: projects.md#updateprojectid-body
[InterfaceDeclaration-16]: ../i-project.md#iproject
[MethodDeclaration-28]: projects.md#emptyprojectid
[MethodDeclaration-29]: projects.md#deleteprojectid