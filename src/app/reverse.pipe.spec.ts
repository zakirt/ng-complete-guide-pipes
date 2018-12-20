import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
    let pipe: ReversePipe;

    beforeEach(() => {
        pipe = new ReversePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should do nothing if the string is empty', () => {
        expect(pipe.transform('')).toBe('');
    });

    it('should reverse string', () => {
        const values = ['hello', 'abc', 'green lantern', 'medium', 'del rich', 'v', 'ga'];
        const reversed = ['olleh', 'cba', 'nretnal neerg', 'muidem', 'hcir led', 'v', 'ag'];
        values.forEach((val: string, index: number) => {
            expect(pipe.transform(val)).toBe(reversed[index]);
        });
    });
});
