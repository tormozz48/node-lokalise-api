# Table of contents

* [i-keys.ts][SourceFile-4]
    * Interfaces
        * [IKeys][InterfaceDeclaration-9]

# i-keys.ts

## Interfaces

### IKeys

```typescript
interface IKeys {
    list(projectId: string, query?: IKeyQuery): Promise<{ project_id: string; keys: IKey[]; }>;
    get(projectId: string, keyId: string): Promise<{ project_id: string; key: IKey; }>;
    create(projectId: string, body: object): Promise<{ keys: IKey[]; }>;
    update(projectId: string, keyId: string, body: object): Promise<{ project_id: string; key: IKey; }>;
    updateMany(projectId: string, body: object): Promise<{ project_id: string; keys: IKey[]; }>;
    deleteMany(projectId: string, body: object): Promise<{ project_id: string; keys_removed: boolean; }>;
    delete(projectId: string, keyId: string): Promise<{ project_id: string; key_removed: boolean; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IKeyQuery): Promise<{ project_id: string; keys: IKey[]; }>;
```

**Parameters**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| projectId | string                               |
| query     | [IKeyQuery][InterfaceDeclaration-10] |

**Return type**

Promise<{ project_id: string; keys: [IKey][InterfaceDeclaration-11][]; }>

```typescript
get(projectId: string, keyId: string): Promise<{ project_id: string; key: IKey; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |

**Return type**

Promise<{ project_id: string; key: [IKey][InterfaceDeclaration-11]; }>

```typescript
create(projectId: string, body: object): Promise<{ keys: IKey[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ keys: [IKey][InterfaceDeclaration-11][]; }>

```typescript
update(projectId: string, keyId: string, body: object): Promise<{ project_id: string; key: IKey; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| body      | object |

**Return type**

Promise<{ project_id: string; key: [IKey][InterfaceDeclaration-11]; }>

```typescript
updateMany(projectId: string, body: object): Promise<{ project_id: string; keys: IKey[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; keys: [IKey][InterfaceDeclaration-11][]; }>

```typescript
deleteMany(projectId: string, body: object): Promise<{ project_id: string; keys_removed: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; keys_removed: boolean; }>

```typescript
delete(projectId: string, keyId: string): Promise<{ project_id: string; key_removed: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |

**Return type**

Promise<{ project_id: string; key_removed: boolean; }>


[SourceFile-4]: i-keys.md#i-keysts
[InterfaceDeclaration-9]: i-keys.md#ikeys
[InterfaceDeclaration-10]: i-key.md#ikeyquery
[InterfaceDeclaration-11]: i-key.md#ikey
[InterfaceDeclaration-11]: i-key.md#ikey
[InterfaceDeclaration-11]: i-key.md#ikey
[InterfaceDeclaration-11]: i-key.md#ikey
[InterfaceDeclaration-11]: i-key.md#ikey