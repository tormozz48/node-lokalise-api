import { IRequest } from './i-request';

export class Base {
    protected request: IRequest;

    constructor(request: IRequest) {
        this.request = request;
    }
}
