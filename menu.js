///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
pizza = {
    name : "pepperoni cheese pizza",
    price : 10,
    category : "entree",
    popularity : 95,
    rating : 4.5,
    tags : ["kid-friendly", "top-rated", "best-seller"]
}


//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

//CODE HERE
console.log('Popularity of pizza: ', pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log('Second tag in the pizza: ', pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

//CODE HERE
const {name : n, price : pr, category : c, popularity : po, rating : r, tags : t} = pizza;
console.log(pr);
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

//CODE HERE
console.log(c);

//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
foodArr = [
    {
        name : "mushroom bacon pizza",
        price : 15,
        category : "entree",
        popularity : 80,
        rating : 2.5,
        tags : ["not kid-friendly", "top-rated", "medium-spicy"]
    },
    {
        name : "pineapple beef pizza",
        price : 17,
        category : "√",
        popularity : 85,
        rating : 3.5,
        tags : ["kid-friendly", "medium-rated", "mild-spicy"]
    },
    {
        name : "italian sausage pizza",
        price : 16,
        category : "entree",
        popularity : 90,
        rating : 4.1,
        tags : ["low carb", "low-rated", "signature"]
    },
    {
        name : "pepperoni cheese pizza",
        price : 10,
        category : "ç",
        popularity : 95,
        rating : 4.5,
        tags : ["not kid-friendly", "medium-rated", "spicy"]
    }
]


//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
const kidFriendlyFoodFunc = (element) => {
    return element.tags[0] == "kid-friendly";
}
const filteredFood = foodArr.filter(kidFriendlyFoodFunc);
console.log(filteredFood);

//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/

//CODE HERE
const filterByProperty = (property, number) => {
    return foodArr.filter((element) => {
        return element[property] > number; // if use dot notation (return element.property > number), it does not work 
    })
}
console.log('Filtered by rating > 3.5: ',filterByProperty("rating", 3.5));
// const newArr = foodArr.filter((element) => {
//     return element.rating > 3.5;
// })
// console.log(newArr);

/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log('Filtered by popularity > 70: ', filterByProperty("popularity", 70));
console.log('Filtered by price > 9: ', filterByProperty("price", 9));