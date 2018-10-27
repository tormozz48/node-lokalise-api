# Table of contents

* [Teams][ClassDeclaration-12]
    * Methods
        * [list(query)][MethodDeclaration-48]

# Teams

```typescript
class Teams implements ITeams
```
## Methods

### list(query)

```typescript
public list(query?: IPage): Promise<{ teams: ITeam[]; }>;
```

**Parameters**

| Name  | Type                            |
| ----- | ------------------------------- |
| query | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ teams: [ITeam][InterfaceDeclaration-27][]; }>

[ClassDeclaration-12]: teams.md#teams
[MethodDeclaration-48]: teams.md#listquery
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-27]: ../i-team.md#iteam