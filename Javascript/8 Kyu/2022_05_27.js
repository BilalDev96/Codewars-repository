// 8 Kyu - Super Duper Easy

/* Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */

function problem(x){
    if(typeof x == "number") {
      return x * 50 + 6;
    }else {
      return 'Error';
    }
}

// 8 Kyu - Training JS #7: If...Else and Ternary Operator

/* Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it. */

function saleHotdogs(n){
    if(n < 5) {
      return n * 100;
    }else if(n >= 5 && n < 10) {
      return n * 95;
    }else {
      return n * 90;
    }
}