import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
    let pipe: SortPipe;

    beforeEach(() => {
        pipe = new SortPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should do nothing', () => {
        expect(pipe.transform(null, 'name')).toEqual(null);
        expect(pipe.transform([], 'name')).toEqual([]);
        expect(pipe.transform([{ name: '' }], '')).toEqual([ { name: '' }]);
    });

    it('should sort by specified property without mutating the original value',  () => {
        testSortedResult(['def', 'rem', 'abc', 'jke', 'qwe'], 'name');
        testSortedResult(['ZhfXUAfIoK', 'IWpewvlCFW', 'lCOQYojdqo', 'aexurAnoqj', 'pAnVCFkasH',
            'ghEXYsnQkF', 'EYSyMdBDyk', 'KpDBJLMCDz', 'KlWGxqYCsQ', 'WSIJAueHgA'], 'customName');
        testSortedResult([6, 1, 5, 3, 8, 2, 7, 4, 9, 2], 'customNum');
    });

    function testSortedResult(values: any[], propName: string) {
        const items = createItems(values, propName);
        const result = pipe.transform(items, propName);
        expect(result).toEqual(getOrderedItems(values, propName));
        expect(items).not.toEqual(result);
    }

    function createItems(values: any[], propName: string): Object[] {
        const items = values.map((val: any) => {
            return {
                [propName]: val
            };
        });
        return items;
    }

    function getOrderedItems(values: any[], propName: string): Object[] {
        const sortedValues = values.slice().sort();
        const items = sortedValues.map((val: any) => {
            return {
                [propName]: val
            };
        });
        return items;
    }
});
