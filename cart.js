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
 const summedreduce = cart.reduce(function (acc, curr) {
      return acc + curr.price }, 0);
  console.log(summedreduce)
// const summedPrice = cart.reduce(/* CALLBACK HERE */)


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
function calcFinalPrice(cartTotal, couponValue, tax ){
    cartTotal += tax * summedreduce
 return cartTotal - couponValue
 
}

const finalTotal = calcFinalPrice(summedreduce,2.006999999999998, .10)


console.log(finalTotal)

        



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
   
    fistName: This property should be a string. I feel this is explanatory but it's important to put in the simplest of customer information. This would be a string because it mainly contains letters.
   
    lastName: This property should be a string. I feel this is explanatory but it's important to put in the simplest of customer information. This would be a string because it mainly contains letters.
   
    address: Property would be a array. If the restaurant has a delivery option This is property should an array  because it contains a combination of numbers and stings that should be  seperate.
   
    phoneNumber: this property will be a number. In case the restaurant needs to contact the customer regarding their order a phone number property will be needed
   
    email: This property will be a string. This is an important property because it allows restaurants to give an alternative way to send receipts Confirmations or restaurants send coupons/discount codes as promotion through email
   
    paymentMeothod: this method could be an array including strings, numbers, and booleans. This is important because it allows customers to pay online. This this could be an array because it could contain multiple sets of different numbers
   
 


    

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: "Vincent",
    lastNAme: "Vega",
    address: "374 pulp-fiction-isn't-even-that-good-of-movie Lane",
    phoneNumber: 10110141994,
    email: "neither_was_once_Upon_a_Time..._In Hollywood@gmail.com",
}
