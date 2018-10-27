export interface ITask {
    task_id: number;
    title: string;
    description: string;
    status: string;
    progress: number;
    due_date: string;
    keys_count: number;
    words_count: number;
    created_at: string;
    created_by: number;
    created_by_email: string;
    languages: object;
    auto_close_languages: boolean;
    auto_close_task: boolean;
    completed_at: string;
    completed_by: number;
    completed_by_email: string;
}
