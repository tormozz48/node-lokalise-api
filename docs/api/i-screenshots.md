# Table of contents

* [i-screenshots.ts][SourceFile-7]
    * Interfaces
        * [IScreenshots][InterfaceDeclaration-17]

# i-screenshots.ts

## Interfaces

### IScreenshots

```typescript
interface IScreenshots {
    list(projectId: string, query?: IPage): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
    get(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot: IScreenshot; }>;
    create(projectId: string, body: object): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
    update(projectId: string, screenshotId: string, body: object): Promise<{ project_id: string; screenshot: IScreenshot; }>;
    delete(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot_deleted: boolean; }>;
}
```
#### Method

```typescript
list(projectId: string, query?: IPage): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
```

**Parameters**

| Name      | Type                            |
| --------- | ------------------------------- |
| projectId | string                          |
| query     | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ project_id: string; screenshots: [IScreenshot][InterfaceDeclaration-18][]; }>

```typescript
get(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot: IScreenshot; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | number |

**Return type**

Promise<{ project_id: string; screenshot: [IScreenshot][InterfaceDeclaration-18]; }>

```typescript
create(projectId: string, body: object): Promise<{ project_id: string; screenshots: IScreenshot[]; }>;
```

**Parameters**

| Name      | Type   |
| --------- | ------ |
| projectId | string |
| body      | object |

**Return type**

Promise<{ project_id: string; screenshots: [IScreenshot][InterfaceDeclaration-18][]; }>

```typescript
update(projectId: string, screenshotId: string, body: object): Promise<{ project_id: string; screenshot: IScreenshot; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | string |
| body         | object |

**Return type**

Promise<{ project_id: string; screenshot: [IScreenshot][InterfaceDeclaration-18]; }>

```typescript
delete(projectId: string, screenshotId: number): Promise<{ project_id: string; screenshot_deleted: boolean; }>;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| projectId    | string |
| screenshotId | number |

**Return type**

Promise<{ project_id: string; screenshot_deleted: boolean; }>


[SourceFile-7]: i-screenshots.md#i-screenshotsts
[InterfaceDeclaration-17]: i-screenshots.md#iscreenshots
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-18]: i-screenshot.md#iscreenshot
[InterfaceDeclaration-18]: i-screenshot.md#iscreenshot
[InterfaceDeclaration-18]: i-screenshot.md#iscreenshot
[InterfaceDeclaration-18]: i-screenshot.md#iscreenshot