function myFunctionToAddTwoNumber(number1:number , number2:number ): number{
    return number1 + number2;
}
console.log(myFunctionToAddTwoNumber(5,6));

function myFunctionToReturnString() : string {
    return "hello typescript";
}
console.log(myFunctionToReturnString());

function myFunctionToReturnAnyType() : void {
    console.log("hello typescript");
}
console.log(myFunctionToReturnAnyType());

let assigningFunction;
assigningFunction = myFunctionToReturnString();
console.log(assigningFunction);

let assigningFuntionWithTypeSpecified : (value1 : number, value2 :number) => number;
assigningFuntionWithTypeSpecified = myFunctionToAddTwoNumber;
console.log(assigningFuntionWithTypeSpecified(10,10));
