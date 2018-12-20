import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    public transform(value: any): any {
        if (!value) {
            return '';
        }
        return this.reverseString(value);
    }

    private reverseString(value: string): string {
        let left = 0;
        let right = value.length;
        const result: string[] = [];

        while (left <= right) {
            result[left] = value[right];
            result[right] = value[left];
            left++;
            right--;
        }

        return result.join('');
    }

}
