export interface IContributor {
    user_id: number;
    email: string;
    fullname: string;
    created_at: string;
    is_admin: boolean;
    is_reviewer: boolean;
    languages: object;
    admin_rights: string[];
}