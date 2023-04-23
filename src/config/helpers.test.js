import { indianCurrency, isBoolean, roundToTwo } from "./helpers";

describe('Test helpers.js', () => {
    test('should return boolean value', () => {
        const output1 = isBoolean("false");
        const output2 = isBoolean("null");
        const output3 = isBoolean("NaN");
        const output4 = isBoolean("undefined");
        const output5 = isBoolean("0");
        const output6 = isBoolean("1");
        const output7 = isBoolean("true");
        const output8 = isBoolean("false");
        const output9 = isBoolean("null");
        const output10 = isBoolean("NaN");
        const output11 = isBoolean("undefined");
        
        expect(output1).toBe(false);
        expect(output2).toBe(false);
        expect(output3).toBe(false);
        expect(output4).toBe(false);
        expect(output5).toBe(false);
        expect(output6).toBe(true);
        expect(output7).toBe(true);
        expect(output8).toBe(false);
        expect(output9).toBe(false);
        expect(output10).toBe(false);
        expect(output11).toBe(false);
    });

    test('should return indian currency', () => {
        const output1 = indianCurrency(1000);
        const output2 = indianCurrency(99);

        expect(output1).toBe("₹1,000.00");
        expect(output2).toBe("₹99.00");
    });

    test('should round to two decimal places', () => {
        const output1 = roundToTwo(1000.3999);
        const output2 = roundToTwo(99.075);

        expect(output1).toBe(1000.4);
        expect(output2).toBe(99.08);
    });
});