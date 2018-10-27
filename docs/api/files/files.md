# Table of contents

* [Files][ClassDeclaration-4]
    * Methods
        * [list(projectId, query)][MethodDeclaration-9]
        * [upload(projectId, body)][MethodDeclaration-10]
        * [download(projectId, body)][MethodDeclaration-11]

# Files

```typescript
class Files implements IFiles
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IFileQuery): Promise<{ projectId: string; files: IFile[]; }>;
```

**Parameters**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| projectId | string                               |
| query     | [IFileQuery][InterfaceDeclaration-7] |

**Return type**

Promise<{ projectId: string; files: [IFile][InterfaceDeclaration-8][]; }>

----------

### upload(projectId, body)

```typescript
public upload(projectId: string, body: object): Promise<object>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<object>

----------

### download(projectId, body)

```typescript
public download(projectId: string, body: object): Promise<{ project_id: string; bundle_url: string; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; bundle_url: string; }>

[ClassDeclaration-4]: files.md#files
[MethodDeclaration-9]: files.md#listprojectid-query
[InterfaceDeclaration-7]: ../i-file.md#ifilequery
[InterfaceDeclaration-8]: ../i-file.md#ifile
[MethodDeclaration-10]: files.md#uploadprojectid-body
[MethodDeclaration-11]: files.md#downloadprojectid-body