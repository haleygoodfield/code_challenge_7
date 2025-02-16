// Task 1: Function Declaration
// Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Formula
    console.log(`Total Invoice: $${total.toFixed(2)}`); // Log using template literals
};
// Test Cases
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"



// Task 2: Function Expression
// Declare a function expression calculateHourlyWage(salary, hoursPerWeek) that calculates hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52) // Formula
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`); // Log using template literals
};
// Test Cases
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"



// Task 3: Arrow Function 
// Write an arrow function calculateLoyaltyDiscount(amount, years) that applies a discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = 0.05; // 5% discount
    if (years >= 5) discountRate = 0.15; // 15% discount
    else if (years >= 3) discountRate = 0.10; // 10% discount

    const discountPrice = amount * (1 - discountRate);
    console.log(`Discounted Price: $${discountPrice.toFixed(2)}`); // Log using template literals
};
// Test Cases
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"



// Task 4: Parameters and Arguments
// Write a function calculateShippingCost(weight, location, expedited = false) to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {
    let locationRate = { "USA": { base: 5, pound: 0.5 }, "Canada": { base: 10, pound: 0.7 } }; 
    let totalCost = locationRate[location].base + (locationRate[location].pound * weight);
    if (expedited) totalCost += 10; 

    console.log(`Shipping Cost: $${totalCost.toFixed(2)}`); // Log using template literals
};
// Test Cases
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50" 



// Task 5: Returning Values
// Write a function calculateLoanInterest(principal, rate, years) that returns total interest
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years; // Formula
    return `Total Interest: $${interest.toFixed(2)}`; // Log using template literals
};
// Test Cases
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"



// Task 6: Higher-Order Functions
// Write a higher-order function filterHighValueTransactions(transactions, filterFunction) that filters transactions above $1000
function filterHighValueTransactions(transactions, filterFunction) {
    let filterHighValueTransactions = transactions.filter(filterFunction);
    console.log(`Filtered Transcactions: $${filterHighValueTransactions}`); // Log using template literals
};
// Test Cases 
let transactions  = [500, 1200, 3000, 800, 2200]; //  Declare an array transactions with at least five amounts.
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]


// Task 7: Closures
// Write a function createBudgetTracker() that returns another function to add expenses and keep a running balance
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`; // Log using template literals
    };
};
// Test Cases
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"



// Task 8: Recursion in JavaScript
// Write a recursive function calculateGrowth(years, revenue) that projects revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue;
    return calculateGrowth(years + 1, revenue * 1.05); // Each year increases revenue by 5% until reaching year 10.
};
// Test Cases
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`); // Expected output: "Projected Revenue: $6381.41"


