# Table of contents

* [i-files.ts][SourceFile-3]
    * Interfaces
        * [IFiles][InterfaceDeclaration-6]

# i-files.ts

## Interfaces

### IFiles

```typescript
interface IFiles {
    list(projectId: string, query?: IFileQuery): Promise<{ projectId: string; files: IFile[]; }>;
    upload(projectId: string, body: object): Promise<object>;
    download(projectId: string, body: object): Promise<{ project_id: string; bundle_url: string; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IFileQuery): Promise<{ projectId: string; files: IFile[]; }>;
```

**Parameters**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| projectId | string                               |
| query     | [IFileQuery][InterfaceDeclaration-7] |

**Return type**

Promise<{ projectId: string; files: [IFile][InterfaceDeclaration-8][]; }>

```typescript
upload(projectId: string, body: object): Promise<object>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<object>

```typescript
download(projectId: string, body: object): Promise<{ project_id: string; bundle_url: string; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; bundle_url: string; }>


[SourceFile-3]: i-files.md#i-filests
[InterfaceDeclaration-6]: i-files.md#ifiles
[InterfaceDeclaration-7]: i-file.md#ifilequery
[InterfaceDeclaration-8]: i-file.md#ifile