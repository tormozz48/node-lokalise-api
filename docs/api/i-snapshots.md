# Table of contents

* [i-snapshots.ts][SourceFile-8]
    * Interfaces
        * [ISnapshots][InterfaceDeclaration-19]

# i-snapshots.ts

## Interfaces

### ISnapshots

```typescript
interface ISnapshots {
    list(projectId: string, query?: IPage): Promise<{ project_id: string; snapshots: ISnapshot[]; }>;
    create(projectId: string, body: object): Promise<{ project_id: string; snapshot: ISnapshot; }>;
    restore(projectId: string, snapshotId: number): Promise<object>;
    delete(projectId: string, snapshotId: number): Promise<{ project_id: string; snapshot_deleted: boolean; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IPage): Promise<{ project_id: string; snapshots: ISnapshot[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; snapshots: [ISnapshot][InterfaceDeclaration-20][]; }>

```typescript
create(projectId: string, body: object): Promise<{ project_id: string; snapshot: ISnapshot; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; snapshot: [ISnapshot][InterfaceDeclaration-20]; }>

```typescript
restore(projectId: string, snapshotId: number): Promise<object>;
```

**Parameters**

| Name       | Type   |
| ---------- | ------ |
| projectId  | string |
| snapshotId | number |

**Return type**

Promise<object>

```typescript
delete(projectId: string, snapshotId: number): Promise<{ project_id: string; snapshot_deleted: boolean; }>;
```

**Parameters**

| Name       | Type   |
| ---------- | ------ |
| projectId  | string |
| snapshotId | number |

**Return type**

Promise<{ project_id: string; snapshot_deleted: boolean; }>


[SourceFile-8]: i-snapshots.md#i-snapshotsts
[InterfaceDeclaration-19]: i-snapshots.md#isnapshots
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-20]: i-snapshot.md#isnapshot
[InterfaceDeclaration-20]: i-snapshot.md#isnapshot