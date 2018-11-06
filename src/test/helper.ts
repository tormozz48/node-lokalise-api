import * as path from 'path';
import * as fs from 'fs';

export const BASE_URL: string = 'https://api.lokalise.co/api2';

export const getRequest = getJsonFor('requests');

export const getResponse = getJsonFor('responses');

function getJsonFor(type: string) {
    return (scope: string, fileName: string): object => {
        const filePath = path.join(process.cwd(), 'src', 'test', scope, type, fileName);
        return JSON.parse(fs.readFileSync(filePath, {encoding: 'utf-8'}));
    };
}