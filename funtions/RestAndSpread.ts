const numbersArray = [1,2,3,4];
console.log(Math.max(...numbersArray));
//spread ( ... ) when used in parameter to the function

// rest ( ... ) when used on the arguments
function maxArray(...args: number[]){
    return Math.max(...args);
}
console.log(maxArray(1,2,3));


function maxArray2(name : string , ...args: number[]){
    return console.log(name + Math.max(...args));
}
console.log(maxArray2("maximum number ",1,2,3));