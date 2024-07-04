import { roundNumber } from './roundNumber';

describe('roundNumber test', () => {
    test('roundNumber function', () => {
        expect(roundNumber(1.566)).toBe(1.57);
    });

    test('with 0', () => {
        expect(roundNumber(0)).toBe(0);
    });

    test('with natural number', () => {
        expect(roundNumber(156)).toBe(156);
    });

    test('with the float number', () => {
        expect(roundNumber(156.5667889)).toBe(156.57);
    });
});
