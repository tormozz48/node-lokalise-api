# Table of contents

* [Screenshots][ClassDeclaration-8]
    * Methods
        * [list(projectId, query)][MethodDeclaration-30]
        * [get(projectId, screenshotId)][MethodDeclaration-31]
        * [create(projectId, body)][MethodDeclaration-32]
        * [update(projectId, screenshotId, body)][MethodDeclaration-33]
        * [delete(projectId, screenshotId)][MethodDeclaration-34]

# Screenshots

```typescript
class Screenshots implements IScreenshots
```
## Methods

### list(projectId, query)

```typescript
public list(projectId: string, query?: IPage): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; screenshots: [IScreenshot][InterfaceDeclaration-18][]; }>

----------

### get(projectId, screenshotId)

```typescript
public get(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot: IScreenshot; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | number |

**Return type**

Promise<{ project_id: string; screenshot: [IScreenshot][InterfaceDeclaration-18]; }>

----------

### create(projectId, body)

```typescript
public create(projectId: string, body: object): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; screenshots: [IScreenshot][InterfaceDeclaration-18][]; }>

----------

### update(projectId, screenshotId, body)

```typescript
public update(projectId: string, screenshotId: any, body: object): Promise<{ project_id: string; screenshot: IScreenshot; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | any    |
| body         | object |

**Return type**

Promise<{ project_id: string; screenshot: [IScreenshot][InterfaceDeclaration-18]; }>

----------

### delete(projectId, screenshotId)

```typescript
public delete(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot_deleted: boolean; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | number |

**Return type**

Promise<{ project_id: string; screenshot_deleted: boolean; }>

[ClassDeclaration-8]: screenshots.md#screenshots
[MethodDeclaration-30]: screenshots.md#listprojectid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-18]: ../i-screenshot.md#iscreenshot
[MethodDeclaration-31]: screenshots.md#getprojectid-screenshotid
[InterfaceDeclaration-18]: ../i-screenshot.md#iscreenshot
[MethodDeclaration-32]: screenshots.md#createprojectid-body
[InterfaceDeclaration-18]: ../i-screenshot.md#iscreenshot
[MethodDeclaration-33]: screenshots.md#updateprojectid-screenshotid-body
[InterfaceDeclaration-18]: ../i-screenshot.md#iscreenshot
[MethodDeclaration-34]: screenshots.md#deleteprojectid-screenshotid