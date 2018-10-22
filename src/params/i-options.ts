export interface IOptions {
    readonly token: string;
    readonly timeout?: number;
    readonly retry?: number;

    baseUrl?: string;
}
