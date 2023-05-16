console.log("hello world")

/*declaring variables and playing with them */
var a;
var b = 2;
 //assigned a a value and replaced b's value
a = 7
b = a;

console.log(b)

var bruh = "sjdsj 'sds' 'sds'fdfd"
console.log(bruh)

//Escape Sequences in Strings
var mystr = "line1\n\t\\line2\nline3"
console.log(mystr)

//Counting amount in string
var name = "sipho";
name_length = name.length;
console.log(name_length)

//Some bracket notation
var name = "sipho";
name_length = name[0];
console.log(name_length)

//Bracket notation to find last letter position
var name = "sipho";
name_length = name.length-1;
console.log(name_length)

//Store multiple values within arrays
 var example_array = ["Sipho", 19];
 var thearray = example_array[0]
 console.log(thearray)

 //multidimensional array (array with other arrays in it)
 var example_array = [["Manchseter United", 2], ["Chelsea", 1]]
 const example_arrays = example_array[1][0]
 console.log(example_arrays)

 //Accessing array values with indexes
 var myarray = [90, 60, 2]
 var thearray = myarray[0];
 console.log(thearray)

 //Changing array values
 var myarray = [45, 67, 89];
 myarray[0] = 42;
 console.log(myarray)

//To access elements in multi-dimensional array
var thearray = [[3,4,5], [5,3,9], [4,2,1]];
 var myarray = thearray[2][0];
 console.log(myarray)

 //Push new data to back of array
 var ourarray = [["sipho", 45], ["Gang", 39]];
 var array = ourarray.push(["bro", 17])

 //delete data from array with "pop". same with multidimensional arrays.
 var ourarray = [1,2,3];
 var notinarray = ourarray.pop();
 console.log(ourarray)

 //delete data from array with "shift". deletes first element rather than final.
 var ourarray = [1,2,3];
 var notinarray = ourarray.shift();
 console.log(ourarray)

 //"push" adds element to end of array. "unshift" adds element to front of array
 var myarray = [["John", 19], ["Chimemwe", 22]];
 myarray.shift();
 myarray.unshift(["Sipho", 30]);
 console.log(myarray)

 //Writing reusable code functions
 function ourReusableFunction()
 {
     console.log("gottcha macha");
 }

 ourReusableFunction();

/*Passing values to functions with arguments
We used parameters here to add */
function funcWithArgs(a, b)
{
    console.log(a+b);
}
funcWithArgs(10, 5);

//In javascript the local variables will take precidence over global ones.

/* means if a local variable and global one are the same name,
It will care about the local one the most and thus use the local variable first*/

//Return value from function with return statement
function mulitplyfive(num)
{
    return num * 5;
}
console.log(mulitplyfive(10))

//Que Data structure. JSON.stringify makes it into JSON then a string for editing.
function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}

var testArray = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After :"+ JSON.stringify(testArray));

//Boolean statements with functions

function TrueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return ("Yeah its true bruh");
    }
    return ("No that was not true. It is false");
}

console.log(TrueOrFalse(false));

//else if statements
function testElseIf(val){
    if (val < 5){
        return ("Less than 5");
    }
    else if (val > 10){
        return ("Greater than 10");
    } else{}
    return ("Between 5 and 10");
} 
console.log(testElseIf(11))

//Challenge of chaining if statements
function ifStatements(num){
    if (num < 5){
        return("Tiny");
    }
    else if (num < 10){
        return("Small");
    }
    else if (num < 15){
        return("Medium");
    }
    else if (num < 20){
        return(" Large");
    }
    else{
        return("Huge");
    }
}
console.log(ifStatements(21))

//Golf code. For this particular course its par 4.
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey","Go home, this ain't for you cuz"]
function golfScorer(par, strokes){
    if (strokes == 1){
        return names[0]
    }
    else if (strokes <= par - 2){
        return names[1]
    }
    else if (strokes <= par - 1){
        return names[2]
    }
    else if (strokes == par){
        return names[3]
    }
    else if (strokes == par + 1){
        return names[4]
    }
    else if (strokes == par + 2){
        return names[5]
    }
    else if (strokes >= par + 3){
        return names[6]
    }
}
console.log(golfScorer(4, 10))

//switch statements. Use them instead of using chained else if
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default://default is the fail safe incase they havent given the input we wanted. 
            answer = "stuff";
            break
    }
    return answer
} 
console.log(caseInSwitch(1))

//Function returning boolean values.
function isLess(a, b){
    return (a < b);
}
console.log(isLess(10,30))

//Blackjack card counting function. Make it using switch statements
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;        

    }
    var holdbet = "Hold"
        if (count > 0){
            holdbet = "Bet"
        }

    return count + " " + holdbet;
}
    
cc(2); cc(""); cc(7); cc("K"); cc("A");
console.log(cc(4))    

/*Building Objects with JS. (inital phase of object orientated programming)
/Objects are similar to arrays. except instead of using indexes we use properties.
/properities:
*/
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

//Accessing object properties with dot notation
var typePerson = {
    "name": "Francis",
    "age": 18,
    "physique": "Athletic",
    "homie": "True"
};

var namevalue = typePerson.name;
var agevalue = typePerson.age;

console.log(namevalue[0])

/*Accessing object properties with bracket notation
can only use bracket notation if object holder has space in it */
var typePerson = {
    "name is": "Francis",
    "age is": 18,
    "physique": "Athletic",
    "homie": "True"
};

var  nameisvalue = testObj["name is"];
var agevalue = testObj["age is"];

//updating object properties
var typePerson = {
    "name": "Francis",
    "age": 18,
    "physique": "Athletic",
    "homie": "True"
};

typePerson.name = "Chimemwe";

//Add new properties to an object
var typePerson = {
    "name": "Francis",
    "age": 18,
    "physique": "Athletic",
    "homie": "True"
};

typePerson["height"] = 169;

//delete properties from object
var typePerson = {
    "name": "Francis",
    "age": 18,
    "physique": "Athletic",
    "homie": "True"
};

delete typePerson.homie;

//Finding Object value through the key.
 function phoneticLookup(val){
     var result = "";

     var lookup = {
         "common": "Phiri",
         "lake": "Salima",
         "lake 2": "Mangochi",
         "airport": "Kasungu",
     };
     result = lookup[val];

     return result
 }
console.log(phoneticLookup("common"))

//Checking if an object has a property
var myObj = {
    "name": "Francis",
    "age": 18,
    "physique": "Athletic",
    "homie": "True"
};

function checkObj(checkProperties){
  if (myObj.hasOwnProperty(checkProperties)){
      return myObj[checkProperties];
  } else {
      return ("Not found")
  }
}
console.log(checkObj("age"))

//Accessing nested objects
var typePerson = {
    "name":{
        "Francis": {
            "lastname":"Phiri"
        },
    "age": 18,
    "physique": "Athletic",
    "homie": "True"

   }  
};
 
var persons = typePerson.name.Francis["lastname"];
console.log(persons)

//Accessing nested arrays
var plants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"]
    },
    {
        type: "tress",
        list: ["pine", "birch", "oak"]
    }
];

var secondTreeaccess = plants[1].list[1];
console.log(secondTreeaccess)

//Record Collection. Given object which is record collection
var collection = {
    "2548": {
        "album": "There",
        "artist": "The fin",
        "tracks": [
            "Shedding",
            "Afterglow"
        ]
    },

    "2468": {
        "album": 22,
        "artist": "Lucky Tapes",
        "tracks": [
            22,
            "Easy"
        ]
    },

    "1236":{
        "album": "Masayume",
        "artist": "Ninjoi",
        "tracks": [
            "Give it to me",
            "Windows"
        ]
    },

    "5800":{
        "artist": "ray johnah jameson",
        "tracks": []
    },

    "5439":{
        "album": "ABBA Gold",
    }
};

//This is Javascripts way of making a backup of the objects.
var CollectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){//if value set to blank we delete the property. (nothing in the string)
    if (value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {//if the value isnt blank and it isnt tracks then put it where its specified there's nothing.
        collection[id][prop] = value;
    }

    return collection;
}
updateRecords(5439, "album", "test");
console.log(updateRecords(5800, "tracks", "SPIDER-MANN!"))

//Iteration with loops. 1. while loop first.
 
console.log(Array)

//Iteration with loops. 2nd for loops.
var Array = [];

for (var i = 0; i < 10; i++){
    Array.push(i);
}
console.log(Array)

//Iterate odd numbers with for loop
var Array = [];
for (var i = 1; i < 10; i += 2){
    Array.push(i);
}
console.log(Array)

//Counting backwards with for loop
var Array = [];
for (var i = 10; i > 0; i -= 2){//for odd numbers change variable i to equal 9
    Array.push(i);
}
console.log(Array)

//Iterate through Array with for loop
var Array = [1,6,9,11,13,15,17,19];
var Total = 0;

for (var i = 1; i < Array.length; i++){
    Total += Array[i];
}

console.log(Array)

/*Nesting for loops (potential multi-dimensional array)
Using Nested for loops to access multi-dimensional array*/
function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++){
        for (var n = 0; n < arr[i].length; n++){
            product *= arr[i][n];
        }
    }

    return product;
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);

//Profie Lookup
var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "222222",
        "likes": ["Pizza", "Books", "Brownie Points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "11111111",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstname": "Yuri",
        "lastname": "Katsuki",
        "number": "77777777",
        "likes": ["Victor", "Ice Skating", "Pork cutlet"]
    },
];

function lookupProfile(name, prop){
    //first thing we do is iterate through each name in the contact list. (using for loop)
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookupProfile("Yuri", "likes");
console.log(data)

//Generate random whole number
var randomNumber = Math.floor(Math.random() * 20);

function randomWholeNum(){

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//Generate random whole numbera within a range
function RandomRange(Min, Max){

    return Math.floor(Math.random() * (Max-Min + 1));
}

var random = RandomRange(0, 1000);

console.log(random)

//Use of the ParseInt function
function convertInteger(str){
    return parseInt(str);
}
console.log(convertInteger(69))

//Using ParseInt Function with Radix
//Radix specifies the base of the number in the string
function convertInteger(str){
    return parseInt(str, 2);//2 lets the computer know its a binary number
}
console.log(convertInteger("10011"))

/*Using the conditional (Ternary) operator
Ternary operator: condition? statement-if-true : statement-if-false;*/
function checkEqual(a,b){
    return a===b ? true : false;
    //same as
    return a===b;
}

//Mute an array even though its  declared with const
const s = [6,7,8];
function editInPlace(){
    "use strict";

//changing the values of the array through bracket notation. it "updates"
s[0] = 2;
s[1] = 9;
s[2] = 5;
}
editInPlace();
console.log(s)

//Writing Anonymous/Lambda/arrow functions
//version 1
var magic = function(){
    return new Date();
};
//version 2
var magic = () => {
    return new Date();
}
//version 3
var magic = () => new Date();

//Writing lambad/anonymous/arrow funuctions with parameters
//difficult way of writing it:
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]))

//simple method of writiing it
var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat([6,7], [8,9,10]))

/*High order lambda/anonymous/arrow function
This one specifically shows us how to write long pieces in one line*/

const realNumArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) =>{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumArray);
console.log(squaredIntegers)

//Another higher order lambda/anonymous/arrow function
const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    };
})();

console.log(increment(5, 2))
console.log(increment(5))

//Using Rest operator with function parameters
//Rest operator allows you to create a function that takes a variable number of arguments
const sum = (function() {
    return function sum (...args){//rest operator is the "..."into the defined ...operator
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(4,10,12,56))

//lambda/anonymous/arrow function using "spread" operator
//spread operator takes array and spreads it into its individual parts
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function(){
    arr2 = [...arr1];
})();
console.log(arr2)