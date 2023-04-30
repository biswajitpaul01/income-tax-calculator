import { isBoolean, roundToTwo } from "./helpers";

export const calculateTaxAndCess = (income) => {
  let tax = 0;
  let slab1Tax, slab2Tax, slab3Tax, slab4Tax = 0;

  while (income > 0) {
    if (income > 1000000) {
      slab4Tax = (income - 1000000) * 0.3;
      income = 1000000;
    } else if (income > 500000) {
      slab3Tax = (income - 500000) * 0.2;
      income = 500000;
    } else if (income > 250000) {
      slab2Tax = (income - 250000) * 0.05;
      income = 250000;
    } else {
      slab1Tax = income * 0;
      income = 0;
    }
  }

  tax = slab1Tax + slab2Tax + slab3Tax + slab4Tax;
  const cess = tax * 0.04;

  return {
    tax: roundToTwo(tax),
    cess: roundToTwo(cess),
    slab1Tax: roundToTwo(slab1Tax),
    slab2Tax: roundToTwo(slab2Tax),
    slab3Tax: roundToTwo(slab3Tax),
    slab4Tax: roundToTwo(slab4Tax),
  }
};

export const calculateNewTaxAndCess = (income) => {
  let tax = 0;
  let cess = 0;
  let slab1Tax = 0, slab2Tax = 0, slab3Tax = 0, slab4Tax = 0, slab5Tax = 0, slab6Tax = 0;

  if (income <= 700000) {
    return {
      tax,
      cess,
      slab1Tax,
      slab2Tax,
      slab3Tax,
      slab4Tax,
      slab5Tax,
      slab6Tax,
    };
  }

  while (income > 0) {
    if (income > 1500000) {
      slab6Tax = (income - 1500000) * 0.3;
      income = 1500000;
    } else if (income > 1200000) {
      slab5Tax = (income - 1200000) * 0.2;
      income = 1200000;
    } else if (income > 900000) {
      slab4Tax = (income - 900000) * 0.15;
      income = 900000;
    } else if (income > 600000) {
      slab3Tax = (income - 600000) * 0.1;
      income = 600000;
    } else if (income > 300000) {
      slab2Tax = (income - 300000) * 0.05;
      income = 300000;
    } else {
      slab1Tax = income * 0;
      income = 0;
    }
  }

  tax = slab1Tax + slab2Tax + slab3Tax + slab4Tax + slab5Tax + slab6Tax;
  cess = tax * 0.04;

  return {
    tax: roundToTwo(tax),
    cess: roundToTwo(cess),
    slab1Tax: roundToTwo(slab1Tax),
    slab2Tax: roundToTwo(slab2Tax),
    slab3Tax: roundToTwo(slab3Tax),
    slab4Tax: roundToTwo(slab4Tax),
    slab5Tax: roundToTwo(slab5Tax),
    slab6Tax: roundToTwo(slab6Tax),
  };
};

export const getHRAExemption = (salaryComponents) => {
  const { basicSalary, da, hra, rentPaid, liveInMetropolitan } = salaryComponents;
  const totalBasicSalary = parseFloat(basicSalary) + parseFloat(da);
  const companyProvidedHRA = parseFloat(hra);
  const totalRentPaid = parseFloat(rentPaid);
  const excessHouseRentPaid = totalRentPaid - totalBasicSalary * 0.1;
  const metroHra = isBoolean(liveInMetropolitan)
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