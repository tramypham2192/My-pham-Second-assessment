///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(myFunc, 0);
function myFunc (sum, element) {
    return sum + element.price;
}
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax / 100) - couponValue;
}
console.log(calcFinalPrice(100, 46, 6));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
My customer object would have these properties:
- customerID, type: string because we need a text for the ID
- first name, type: string because we need a text for the last name
- last name, type: string because we need a text for the first name
- phone number: string because phone number contains all numbers
- order history: type: array of object. The object would has the following properties: date of order which is a string, total bill which is a number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    customerID: "8749",
    lastName: "Smith",
    firstName: "Kimmy",
    phoneNumber: "6692068769",
    orderHistory: [
        {
            orderDate: "Jan 01, 2019",
            totalBill: 47
        },
        {
            orderDate: "March 4, 2020",
            totalBill: 98
        }
    ]
}