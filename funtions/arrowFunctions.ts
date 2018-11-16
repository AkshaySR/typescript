//Arrow Functions

//normal function
const addTwoNumbers = function(number1 : number, number2 :number) :number {
    return number1 + number2 ;
};
console.log(addTwoNumbers(3,4));

//with arrow
const addTwoNumbersWithArrow = (number1 :number, number2:number) => number1 + number2;
console.log(addTwoNumbersWithArrow(3,4));

//arrow with no argument
const arrowWithNoarguments = () => 2+3;
console.log(arrowWithNoarguments());

//arrow with one argument
/*
const welcomeString = welcome => console.log(welcome);
welcomeString("welcome");*/
