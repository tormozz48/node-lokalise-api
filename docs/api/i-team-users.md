# Table of contents

* [i-team-users.ts][SourceFile-10]
    * Interfaces
        * [ITeamUsers][InterfaceDeclaration-24]

# i-team-users.ts

## Interfaces

### ITeamUsers

```typescript
interface ITeamUsers {
    list(teamId: string, query?: IPage): Promise<{ team_id: number; team_users: ITeamUser[]; }>;
    get(teamId: string, userId: string): Promise<{ team_id: number; team_user: ITeamUser; }>;
    update(teamId: string, userId: string, body: object): Promise<{ team_id: number; team_user: ITeamUser; }>;
    delete(teamId: string, userId: string): Promise<{ team_id: number; team_user_deleted: boolean; }>;
}
```
#### Method

```typescript
list(teamId: string, query?: IPage): Promise<{ team_id: number; team_users: ITeamUser[]; }>;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| teamId | string                          |
| query  | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ team_id: number; team_users: [ITeamUser][InterfaceDeclaration-25][]; }>

```typescript
get(teamId: string, userId: string): Promise<{ team_id: number; team_user: ITeamUser; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |

**Return type**

Promise<{ team_id: number; team_user: [ITeamUser][InterfaceDeclaration-25]; }>

```typescript
update(teamId: string, userId: string, body: object): Promise<{ team_id: number; team_user: ITeamUser; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |
| body   | object |

**Return type**

Promise<{ team_id: number; team_user: [ITeamUser][InterfaceDeclaration-25]; }>

```typescript
delete(teamId: string, userId: string): Promise<{ team_id: number; team_user_deleted: boolean; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |

**Return type**

Promise<{ team_id: number; team_user_deleted: boolean; }>


[SourceFile-10]: i-team-users.md#i-team-usersts
[InterfaceDeclaration-24]: i-team-users.md#iteamusers
[InterfaceDeclaration-2]: i-page.md#ipage
[InterfaceDeclaration-25]: i-team-user.md#iteamuser
[InterfaceDeclaration-25]: i-team-user.md#iteamuser
[InterfaceDeclaration-25]: i-team-user.md#iteamuser