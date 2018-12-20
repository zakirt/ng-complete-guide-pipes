import { PipeTransform, Pipe } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit = 10): string {
        if (value.length > limit) {
            const shortened: string = value.substr(0, limit);
            return `${shortened} ...`;
        }
        return value;
    }
}
