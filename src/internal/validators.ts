import 'reflect-metadata';
import * as Joi from 'joi';
import {Base} from './base';

const numberKey = Symbol('numberType');
const stringKey = Symbol('stringType');

export function checkNumber(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existed: number[] = Reflect.getOwnMetadata(numberKey, target, propertyKey) || [];
    existed.push(parameterIndex);
    Reflect.defineMetadata(numberKey, existed, target, propertyKey);
}

export function checkString(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existed: number[] = Reflect.getOwnMetadata(stringKey, target, propertyKey) || [];
    existed.push(parameterIndex);
    Reflect.defineMetadata(stringKey, existed, target, propertyKey);
}

export function validate(target: Base, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let original = descriptor.value;
    descriptor.value = function(...args) {
        const stringParams: number[] = Reflect.getOwnMetadata(stringKey, target, propertyName);
        if (stringParams) {
            for (let i of stringParams) {
                Joi.assert(args[i], Joi.string(), `Invalid argument ${i}`);
            }
        }

        const numberParams: number[] = Reflect.getOwnMetadata(numberKey, target, propertyName);
        if (numberParams) {
            for (let i of numberParams) {
                Joi.assert(args[i], Joi.number(), `Invalid argument ${i}`);
            }
        }

        return original.apply(this, args);
    };
}
