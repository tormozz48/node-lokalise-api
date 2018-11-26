import debugLib from 'debug';
import {Request} from './request';

const _debug = debugLib('node-lokalise-api:');

export function debug(target: Request, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let original = descriptor.value;
    descriptor.value = function(...args) {
        const {url} = args[0];
        _debug(`request for url: ${url}`);

        return original.apply(this, args);
    };
}