# Table of contents

* [TeamUsers][ClassDeclaration-11]
    * Methods
        * [list(teamId, query)][MethodDeclaration-44]
        * [get(teamId, userId)][MethodDeclaration-45]
        * [update(teamId, userId, body)][MethodDeclaration-46]
        * [delete(teamId, userId)][MethodDeclaration-47]

# TeamUsers

```typescript
class TeamUsers implements ITeamUsers
```
## Methods

### list(teamId, query)

```typescript
public list(teamId: string, query?: IPage): Promise<{ team_id: number; team_users: ITeamUser[]; }>;
```

**Parameters**

| Name   | Type                            |
| ------ | ------------------------------- |
| teamId | string                          |
| query  | [IPage][InterfaceDeclaration-2] |

**Return type**

Promise<{ team_id: number; team_users: [ITeamUser][InterfaceDeclaration-25][]; }>

----------

### get(teamId, userId)

```typescript
public get(teamId: string, userId: string): Promise<{ team_id: number; team_user: ITeamUser; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |

**Return type**

Promise<{ team_id: number; team_user: [ITeamUser][InterfaceDeclaration-25]; }>

----------

### update(teamId, userId, body)

```typescript
public update(teamId: string, userId: string, body: object): Promise<{ team_id: number; team_user: ITeamUser; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |
| body   | object |

**Return type**

Promise<{ team_id: number; team_user: [ITeamUser][InterfaceDeclaration-25]; }>

----------

### delete(teamId, userId)

```typescript
public delete(teamId: string, userId: string): Promise<{ team_id: number; team_user_deleted: boolean; }>;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| teamId | string |
| userId | string |

**Return type**

Promise<{ team_id: number; team_user_deleted: boolean; }>

[ClassDeclaration-11]: teamusers.md#teamusers
[MethodDeclaration-44]: teamusers.md#listteamid-query
[InterfaceDeclaration-2]: ../i-page.md#ipage
[InterfaceDeclaration-25]: ../i-team-user.md#iteamuser
[MethodDeclaration-45]: teamusers.md#getteamid-userid
[InterfaceDeclaration-25]: ../i-team-user.md#iteamuser
[MethodDeclaration-46]: teamusers.md#updateteamid-userid-body
[InterfaceDeclaration-25]: ../i-team-user.md#iteamuser
[MethodDeclaration-47]: teamusers.md#deleteteamid-userid