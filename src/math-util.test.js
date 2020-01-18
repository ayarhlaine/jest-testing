const {sum,positive,negative} = require('./math-util');

describe('Math Util Test', () => {
    let positives,negatives,values,total;

    beforeAll(()=> {
        positives = [1,2,3];
        negatives = [-1,-2,-3];
        values = positives.concat(negatives);
        total = values.reduce((a, b) => a + b, 0);
    })
    it('sum of the values should be 0', () => {
        expect(sum(values)).toBe(total);
    });
    it('postive value of the values should be 1,2,3', () => {
        expect(positive(values)).toEqual(positives);
    });
    it('negative value of the values should be -1,-2,-3', () => {
        expect(negative(values)).toEqual(negatives);
    });
});