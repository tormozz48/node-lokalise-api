export interface ITeam {
    team_id: number;
    name: string;
    created_at: string;
    plan: string;
    quota_usage: object;
    quota_allowed: object;
}