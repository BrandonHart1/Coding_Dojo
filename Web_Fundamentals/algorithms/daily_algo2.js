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
