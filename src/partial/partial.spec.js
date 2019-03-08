import { partial } from './partial';


describe('partial', () => {
    it('should return a function with the arguements applied', () => {
        const testFunc = (x, y, z) => x + y + z;
        const appliedFunc = partial(testFunc, 1, 2);
        
        expect(appliedFunc(3)).toEqual(6);
    });
});