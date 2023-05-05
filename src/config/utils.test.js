import { calculateTaxAndCess, getHRAExemption } from "./utils";

describe('Test utils.js', () => {
    test('should calculate Tax and Cess', () => {
        const output1 = calculateTaxAndCess(1000000);

        expect(output1.tax).toBe(112500);
        expect(output1.cess).toBe(4500);
    });

    test('should calculate HRA Exemption', () => {
        const output1 = getHRAExemption({
            basicSalary: 594996, da: 0, hra: 297498, rentPaid: 120000, liveInMetropolitan: '1'
        });

        expect(output1.companyProvidedHRA).toBe(297498);
        expect(output1.excessHouseRentPaid).toBe(60500.4);
        expect(output1.metroHra).toBe(148749);
        expect(output1.finalHRAExemption).toBe(60500.4);
    });
});