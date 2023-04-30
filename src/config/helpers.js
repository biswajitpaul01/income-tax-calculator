export const isBoolean = (v) => { return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v; };

export const indianCurrency = (value) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(value)
};

export const roundToTwo = (num) => {
    return +(Math.round(num + "e+2")  + "e-2");
};

export const scrollIntoView = (element) => {
    element.scrollIntoView({ 
        behavior: "smooth", 
        block: "end", 
        inline: "nearest" 
    });
}