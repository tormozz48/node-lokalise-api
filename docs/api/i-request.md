# Table of contents

* [i-request.ts][SourceFile-26]
    * Interfaces
        * [IRequest][InterfaceDeclaration-30]

# i-request.ts

## Interfaces

### IRequest

```typescript
interface IRequest {
    get(params: IGet): any;
    post(params: IPost): any;
    put(params: IPut): any;
    delete(params: IDelete): any;
}
```
#### Method

```typescript
get(params: IGet): any;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| params | [IGet][InterfaceDeclaration-31] |

**Return type**

any

```typescript
post(params: IPost): any;
```

**Parameters**

| Name   | Type                             |
| ------ | -------------------------------- |
| params | [IPost][InterfaceDeclaration-32] |

**Return type**

any

```typescript
put(params: IPut): any;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| params | [IPut][InterfaceDeclaration-33] |

**Return type**

any

```typescript
delete(params: IDelete): any;
```

**Parameters**

| Name   | Type                               |
| ------ | ---------------------------------- |
| params | [IDelete][InterfaceDeclaration-34] |

**Return type**

any


[SourceFile-26]: i-request.md#i-requestts
[InterfaceDeclaration-30]: i-request.md#irequest
[InterfaceDeclaration-31]: i-get.md#iget
[InterfaceDeclaration-32]: i-post.md#ipost
[InterfaceDeclaration-33]: i-put.md#iput
[InterfaceDeclaration-34]: i-delete.md#idelete