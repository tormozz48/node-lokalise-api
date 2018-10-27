# Table of contents

* [Keys][ClassDeclaration-5]
    * Methods
        * [list(projectId, query)][MethodDeclaration-12]
        * [get(projectId, keyId)][MethodDeclaration-13]
        * [create(projectId, body)][MethodDeclaration-14]
        * [update(projectId, keyId, body)][MethodDeclaration-15]
        * [updateMany(projectId, body)][MethodDeclaration-16]
        * [deleteMany(projectId, body)][MethodDeclaration-17]
        * [delete(projectId, keyId)][MethodDeclaration-18]

# Keys

```typescript
class Keys implements IKeys
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IKeyQuery): Promise<{ project_id: string; keys: IKey[]; }>;
```

**Parameters**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| projectId | string                               |
| query     | [IKeyQuery][InterfaceDeclaration-10] |

**Return type**

Promise<{ project_id: string; keys: [IKey][InterfaceDeclaration-11][]; }>

----------

### get(projectId, keyId)

```typescript
public get(projectId: string, keyId: string): Promise<{ project_id: string; key: IKey; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |

**Return type**

Promise<{ project_id: string; key: [IKey][InterfaceDeclaration-11]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ keys: IKey[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ keys: [IKey][InterfaceDeclaration-11][]; }>

----------

### update(projectId, keyId, body)

```typescript
public update(projectId: string, keyId: string, body: object): Promise<{ project_id: string; key: IKey; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| body      | object |

**Return type**

Promise<{ project_id: string; key: [IKey][InterfaceDeclaration-11]; }>

----------

### updateMany(projectId, body)

```typescript
public updateMany(projectId: string, body: object): Promise<{ project_id: string; keys: IKey[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; keys: [IKey][InterfaceDeclaration-11][]; }>

----------

### deleteMany(projectId, body)

```typescript
public deleteMany(projectId: string, body: object): Promise<{ project_id: string; keys_removed: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; keys_removed: boolean; }>

----------

### delete(projectId, keyId)

```typescript
public delete(projectId: string, keyId: string): Promise<{ project_id: string; key_removed: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |

**Return type**

Promise<{ project_id: string; key_removed: boolean; }>

[ClassDeclaration-5]: keys.md#keys
[MethodDeclaration-12]: keys.md#listprojectid-query
[InterfaceDeclaration-10]: ../i-key.md#ikeyquery
[InterfaceDeclaration-11]: ../i-key.md#ikey
[MethodDeclaration-13]: keys.md#getprojectid-keyid
[InterfaceDeclaration-11]: ../i-key.md#ikey
[MethodDeclaration-14]: keys.md#createprojectid-body
[InterfaceDeclaration-11]: ../i-key.md#ikey
[MethodDeclaration-15]: keys.md#updateprojectid-keyid-body
[InterfaceDeclaration-11]: ../i-key.md#ikey
[MethodDeclaration-16]: keys.md#updatemanyprojectid-body
[InterfaceDeclaration-11]: ../i-key.md#ikey
[MethodDeclaration-17]: keys.md#deletemanyprojectid-body
[MethodDeclaration-18]: keys.md#deleteprojectid-keyid