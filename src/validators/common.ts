import * as Joi from 'joi';
import {Base} from '../internal/base';

export function validateProjectId(target: Base, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const original = descriptor.value!;
    descriptor.value = function(projectId, ...args) {
        Joi.assert(projectId, Joi.string(), 'Invalid "projectId".');
        return original.bind(this)(projectId, ...args);
    };
}