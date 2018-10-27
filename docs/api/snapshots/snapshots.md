# Table of contents

* [Snapshots][ClassDeclaration-9]
    * Methods
        * [list(projectId, query)][MethodDeclaration-35]
        * [create(projectId, body)][MethodDeclaration-36]
        * [restore(projectId, snapshotId)][MethodDeclaration-37]
        * [delete(projectId, snapshotId)][MethodDeclaration-38]

# Snapshots

```typescript
class Snapshots implements ISnapshots
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IPage): Promise<{ project_id: string; snapshots: ISnapshot[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; snapshots: [ISnapshot][InterfaceDeclaration-20][]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ project_id: string; snapshot: ISnapshot; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; snapshot: [ISnapshot][InterfaceDeclaration-20]; }>

----------

### restore(projectId, snapshotId)

```typescript
public restore(projectId: string, snapshotId: number): Promise<object>;
```

**Parameters**

| Name       | Type   |
| ---------- | ------ |
| projectId  | string |
| snapshotId | number |

**Return type**

Promise<object>

----------

### delete(projectId, snapshotId)

```typescript
public delete(projectId: string, snapshotId: number): Promise<{ project_id: string; snapshot_deleted: boolean; }>;
```

**Parameters**

| Name       | Type   |
| ---------- | ------ |
| projectId  | string |
| snapshotId | number |

**Return type**

Promise<{ project_id: string; snapshot_deleted: boolean; }>

[ClassDeclaration-9]: snapshots.md#snapshots
[MethodDeclaration-35]: snapshots.md#listprojectid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-20]: ../i-snapshot.md#isnapshot
[MethodDeclaration-36]: snapshots.md#createprojectid-body
[InterfaceDeclaration-20]: ../i-snapshot.md#isnapshot
[MethodDeclaration-37]: snapshots.md#restoreprojectid-snapshotid
[MethodDeclaration-38]: snapshots.md#deleteprojectid-snapshotid