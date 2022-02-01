// ##################################################################
var x = 0;
for(var i=1; i<5; i++) {
    x += i;
}
console.log(x);


var x = "0";
for(var i=1; i<5; i++) {
    x += i;
}
console.log(x);


// #######  Palindrome Example  #####################################
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);


// ####################################################################
var x = 5;  
// var x is a global variable

function setX(newValue) {
    x = newValue;
}
console.log(x);
setX(15);
console.log(x);
    // Functions are a series of steps that accomplish a task.
    // Function declaration starts with the "function" keyword, 
        // followed by the name of the function.
    // If you create a new variable, it can only be used inside that function.



// ####################################################################
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there"); 
    // the console.log will not print because there is a return above it
    // the value of a function is whatever that function RETURNS
}

console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// ####################################################################
// Reverse the array########################################
// ["a", "b", "c", "d", "e"];
var array = ["a", "b", "c", "d", "e"]

var i = 0;
var x = ((array.length)/2)-1

function reverse(array) {
    while (i<=x) {
        var temp = array[i];
        array[i]=array[(array.length)-i-1];
        array[(array.length) -i -1]=temp; i++;
    }
    console.log(array)
}
reverse(array);

// ####################################################################

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
// random returns a float inclusive of 0 and less than 1
var random = Math.random();
    
console.log(floor); /* -->                   */
console.log(ceiling);
console.log(random);

// Math.floor - Math is a class because it starts with a capital letter.

// ####################################################################

function d6(max) {
    var roll = Math.random();
    roll = Math.floor(Math.random() * max) + 1;
    return roll;
}
    for(var i = 0; i < 100; i++) {
    var playerRoll = d6(7);
    console.log("The player rolled: " + playerRoll);
}
// ####################################################################
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

