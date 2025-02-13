// Task 1: Function Declaration
// Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Formula
    return `Total Invoice: $${total.toFixed(2)}`; // Log using template literals
};

console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"



// Task 2: Function Expression
// Declare a function expression calculateHourlyWage(salary, hoursPerWeek) that calculates hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52) // Formula
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; // Log using template literals
};

console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"



// Task 3: Arrow Function 
// Write an arrow function calculateLoyaltyDiscount(amount, years) that applies a discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate;
    if (years >= 5) {
        discountRate = 0.15; // 15% discount
    } else if (years >= 3) {
        discountRate =0.10; // 10% discount
    } else {
        discountRate = 0.05; // 5% discount
    }
    let discountPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountPrice.toFixed(2)}`;
};

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"



