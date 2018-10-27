# Table of contents

* [Tasks][ClassDeclaration-10]
    * Methods
        * [list(projectId, query)][MethodDeclaration-39]
        * [get(projectId, taskId)][MethodDeclaration-40]
        * [create(projectId, body)][MethodDeclaration-41]
        * [update(projectId, taskId, body)][MethodDeclaration-42]
        * [delete(projectId, taskId)][MethodDeclaration-43]

# Tasks

```typescript
class Tasks implements ITasks
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: ITaskQuery): Promise<{ project_id: string; tasks: ITask[]; }>;
```

**Parameters**

| Name      | Type                                  |
| --------- | ------------------------------------- |
| projectId | string                                |
| query     | [ITaskQuery][InterfaceDeclaration-22] |

**Return type**

Promise<{ project_id: string; tasks: [ITask][InterfaceDeclaration-23][]; }>

----------

### get(projectId, taskId)

```typescript
public get(projectId: string, taskId: string): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

----------

### update(projectId, taskId, body)

```typescript
public update(projectId: string, taskId: string, body: object): Promise<{ project_id: string; task: ITask; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |
| body      | object |

**Return type**

Promise<{ project_id: string; task: [ITask][InterfaceDeclaration-23]; }>

----------

### delete(projectId, taskId)

```typescript
public delete(projectId: string, taskId: string): Promise<{ project_id: string; task_deleted: boolean; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| taskId    | string |

**Return type**

Promise<{ project_id: string; task_deleted: boolean; }>

[ClassDeclaration-10]: tasks.md#tasks
[MethodDeclaration-39]: tasks.md#listprojectid-query
[InterfaceDeclaration-22]: ../i-task.md#itaskquery
[InterfaceDeclaration-23]: ../i-task.md#itask
[MethodDeclaration-40]: tasks.md#getprojectid-taskid
[InterfaceDeclaration-23]: ../i-task.md#itask
[MethodDeclaration-41]: tasks.md#createprojectid-body
[InterfaceDeclaration-23]: ../i-task.md#itask
[MethodDeclaration-42]: tasks.md#updateprojectid-taskid-body
[InterfaceDeclaration-23]: ../i-task.md#itask
[MethodDeclaration-43]: tasks.md#deleteprojectid-taskid