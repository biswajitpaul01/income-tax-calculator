import { isBoolean, roundToTwo } from "./helpers";

export const calculateTaxAndCess = (income) => {
    let tax = 0;
    if (income <= 250000) {
      tax = 0;
    } else if (income > 250000 && income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
      tax = (income - 500000) * 0.2 + 12500;
    } else if (income > 1000000) {
      tax = (income - 1000000) * 0.3 + 112500;
    }
    const cess = tax * 0.04;    

    return {
        tax: roundToTwo(tax),
        cess: roundToTwo(cess),
    }
};

export const getHRAExemption = (salaryComponents) => {
    const { basicSalary, da, hra, rentPaid, liveInMetorpolitan } = salaryComponents;
    const totalBasicSalary = parseFloat(basicSalary) + parseFloat(da);
    const companyProvidedHRA = parseFloat(hra);
    const totalRentPaid = parseFloat(rentPaid);
    const excessHouseRentPaid = totalRentPaid - totalBasicSalary * 0.1;
    const metroHra = isBoolean(liveInMetorpolitan)
        ? companyProvidedHRA * 0.5
        : companyProvidedHRA * 0.4;
    const finalHRAExemption = Math.min(
        companyProvidedHRA,
        excessHouseRentPaid,
        metroHra
    );

    return {
        companyProvidedHRA: roundToTwo(companyProvidedHRA),
        excessHouseRentPaid: roundToTwo(excessHouseRentPaid),
        metroHra: roundToTwo(metroHra),
        finalHRAExemption: roundToTwo(finalHRAExemption),
    };
};