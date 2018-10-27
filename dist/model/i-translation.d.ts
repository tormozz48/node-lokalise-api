export interface ITranslation {
    translation_id: number;
    key_id: number;
    language_iso: string;
    modified_at: string;
    modified_by: number;
    modified_by_email: string;
    translation: string;
    is_fuzzy: boolean;
    is_reviewed: boolean;
    words: number;
}
