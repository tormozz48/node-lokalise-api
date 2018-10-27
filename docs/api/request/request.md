# Table of contents

* [Request][ClassDeclaration-14]
    * Constructor
        * [constructor(options)][Constructor-2]
    * Methods
        * [get(params)][MethodDeclaration-52]
        * [post(params)][MethodDeclaration-53]
        * [put(params)][MethodDeclaration-54]
        * [delete(params)][MethodDeclaration-55]

# Request

```typescript
class Request implements IRequest
```
## Constructor

### constructor(options)

```typescript
public constructor(options: IOptions);
```

**Parameters**

| Name    | Type                               |
| ------- | ---------------------------------- |
| options | [IOptions][InterfaceDeclaration-0] |

## Methods

### get(params)

```typescript
public get(params: IGet): any;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| params | [IGet][InterfaceDeclaration-31] |

**Return type**

any

----------

### post(params)

```typescript
public post(params: IPost): any;
```

**Parameters**

| Name   | Type                             |
| ------ | -------------------------------- |
| params | [IPost][InterfaceDeclaration-32] |

**Return type**

any

----------

### put(params)

```typescript
public put(params: IPut): any;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| params | [IPut][InterfaceDeclaration-33] |

**Return type**

any

----------

### delete(params)

```typescript
public delete(params: IDelete): any;
```

**Parameters**

| Name   | Type                               |
| ------ | ---------------------------------- |
| params | [IDelete][InterfaceDeclaration-34] |

**Return type**

any

[ClassDeclaration-14]: request.md#request
[Constructor-2]: request.md#constructoroptions
[InterfaceDeclaration-0]: ../i-options.md#ioptions
[MethodDeclaration-52]: request.md#getparams
[InterfaceDeclaration-31]: ../i-get.md#iget
[MethodDeclaration-53]: request.md#postparams
[InterfaceDeclaration-32]: ../i-post.md#ipost
[MethodDeclaration-54]: request.md#putparams
[InterfaceDeclaration-33]: ../i-put.md#iput
[MethodDeclaration-55]: request.md#deleteparams
[InterfaceDeclaration-34]: ../i-delete.md#idelete