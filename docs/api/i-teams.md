# Table of contents

* [i-teams.ts][SourceFile-11]
    * Interfaces
        * [ITeams][InterfaceDeclaration-26]

# i-teams.ts

## Interfaces

### ITeams

```typescript
interface ITeams {
    list(query?: IPage): Promise<{ teams: ITeam[]; }>;
}
```
#### Method

```typescript
list(query?: IPage): Promise<{ teams: ITeam[]; }>;
```

**Parameters**

| Name  | Type                            |
| ----- | ------------------------------- |
| query | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ teams: [ITeam][InterfaceDeclaration-27][]; }>


[SourceFile-11]: i-teams.md#i-teamsts
[InterfaceDeclaration-26]: i-teams.md#iteams
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-27]: i-team.md#iteam