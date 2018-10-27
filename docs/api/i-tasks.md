# Table of contents

* [i-tasks.ts][SourceFile-9]
    * Interfaces
        * [ITasks][InterfaceDeclaration-21]

# i-tasks.ts

## Interfaces

### ITasks

```typescript
interface ITasks {
    list(projectId: string, query?: ITaskQuery): Promise<{ project_id: string; tasks: ITask[]; }>;
    get(projectId: string, taskId: string): Promise<{ project_id: string; task: ITask; }>;
    create(projectId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
    update(projectId: string, taskId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
    delete(projectId: string, taskId: string): Promise<{ project_id: string; task_deleted: boolean; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: ITaskQuery): Promise<{ project_id: string; tasks: ITask[]; }>;
```

**Parameters**

| Name      | Type                                  |
| --------- | ------------------------------------- |
| projectId | string                                |
| query     | [ITaskQuery][InterfaceDeclaration-22] |

**Return type**

Promise<{ project_id: string; tasks: [ITask][InterfaceDeclaration-23][]; }>

```typescript
get(projectId: string, taskId: string): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

```typescript
create(projectId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

```typescript
update(projectId: string, taskId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |
| body      | object |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

```typescript
delete(projectId: string, taskId: string): Promise<{ project_id: string; task_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |

**Return type**

Promise<{ project_id: string; task_deleted: boolean; }>


[SourceFile-9]: i-tasks.md#i-tasksts
[InterfaceDeclaration-21]: i-tasks.md#itasks
[InterfaceDeclaration-22]: i-task.md#itaskquery
[InterfaceDeclaration-23]: i-task.md#itask
[InterfaceDeclaration-23]: i-task.md#itask
[InterfaceDeclaration-23]: i-task.md#itask
[InterfaceDeclaration-23]: i-task.md#itask