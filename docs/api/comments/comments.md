# Table of contents

* [Comments][ClassDeclaration-1]
    * Methods
        * [list(projectId, keyId, query)][MethodDeclaration-0]
        * [get(projectId, keyId, commentId)][MethodDeclaration-1]
        * [create(projectId, keyId, body)][MethodDeclaration-2]
        * [delete(projectId, keyId, commentId)][MethodDeclaration-3]

# Comments

```typescript
class Comments implements IComments
```
## Methods

### list(projectId, keyId, query)

```typescript
public list(projectId: string, keyId?: string, query?: IPage): Promise<{ project_id: string; comments: IComment[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| keyId     | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; comments: [IComment][InterfaceDeclaration-3][]; }>

----------

### get(projectId, keyId, commentId)

```typescript
public get(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment: IComment; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| commentId | string |

**Return type**

Promise<{ project_id: string; comment: [IComment][InterfaceDeclaration-3]; }>

----------

### create(projectId, keyId, body)

```typescript
public create(projectId: string, keyId: string, body: object): Promise<{ project_id: string; comments: IComment[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| body      | object |

**Return type**

Promise<{ project_id: string; comments: [IComment][InterfaceDeclaration-3][]; }>

----------

### delete(projectId, keyId, commentId)

```typescript
public delete(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment_deleted: true; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| commentId | string |

**Return type**

Promise<{ project_id: string; comment_deleted: true; }>

[ClassDeclaration-1]: comments.md#comments
[MethodDeclaration-0]: comments.md#listprojectid-keyid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-3]: ../i-comment.md#icomment
[MethodDeclaration-1]: comments.md#getprojectid-keyid-commentid
[InterfaceDeclaration-3]: ../i-comment.md#icomment
[MethodDeclaration-2]: comments.md#createprojectid-keyid-body
[InterfaceDeclaration-3]: ../i-comment.md#icomment
[MethodDeclaration-3]: comments.md#deleteprojectid-keyid-commentid