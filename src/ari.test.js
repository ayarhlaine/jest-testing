const {add,sub,mul,div} = require('./ari');

describe('Arithmetic Tests', () => {
    it('should add(2,3) will return 5', () => {
        expect(add(2,3)).toBe(5);
    });
    it('should sub(2,1) will return 1', () => {
        expect(sub(2,1)).toBe(1);
    });
    it('should mul(2,3) will return 6', () => {
        expect(mul(2,3)).toBe(6);
    });
    it('should div(6,3) will return 2', () => {
        expect(div(6,3)).toBe(2);
    });
});