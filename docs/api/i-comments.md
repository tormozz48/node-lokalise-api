# Table of contents

* [i-comments.ts][SourceFile-1]
    * Interfaces
        * [IComments][InterfaceDeclaration-1]

# i-comments.ts

## Interfaces

### IComments

```typescript
interface IComments {
    list(projectId: string, keyId?: string, query?: IPage): Promise<{ project_id: string; comments: IComment[]; }>;
    get(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment: IComment; }>;
    create(projectId: string, keyId: string, body: object): Promise<{ project_id: string; comments: IComment[]; }>;
    delete(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment_deleted: true; }>;
}
```
#### Method

```typescript
list(projectId: string, keyId?: string, query?: IPage): Promise<{ project_id: string; comments: IComment[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| keyId     | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; comments: [IComment][InterfaceDeclaration-3][]; }>

```typescript
get(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment: IComment; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| commentId | string |

**Return type**

Promise<{ project_id: string; comment: [IComment][InterfaceDeclaration-3]; }>

```typescript
create(projectId: string, keyId: string, body: object): Promise<{ project_id: string; comments: IComment[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| body      | object |

**Return type**

Promise<{ project_id: string; comments: [IComment][InterfaceDeclaration-3][]; }>

```typescript
delete(projectId: string, keyId: string, commentId: string): Promise<{ project_id: string; comment_deleted: true; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| keyId     | string |
| commentId | string |

**Return type**

Promise<{ project_id: string; comment_deleted: true; }>


[SourceFile-1]: i-comments.md#i-commentsts
[InterfaceDeclaration-1]: i-comments.md#icomments
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-3]: i-comment.md#icomment
[InterfaceDeclaration-3]: i-comment.md#icomment
[InterfaceDeclaration-3]: i-comment.md#icomment