import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: any, propName: string): any {
        if (this.isNotValidValueOrPropName(value, propName)) {
            return value;
        }

        return value.slice().sort((a, b) => {
            if (a[propName] < b[propName]) {
                return -1;
            }
            if (a[propName] > b[propName]) {
                return 1;
            }
            return 0;
        });
    }

    private isNotValidValueOrPropName(value: any, propName: string): boolean {
        return !value || value.length === 0 || !propName;
    }
}
