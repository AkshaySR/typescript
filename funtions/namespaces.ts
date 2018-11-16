namespace NoOfItems {
    export function myFunctionToAddTwoNumber(number1:number , number2:number ): number{
        return number1 + number2;
    }

    export function myFunctionToReturnString() : string {
        return "hello typescript";
    }

    export function myFunctionToReturnAnyType() : void {
        console.log("hello typescript");
    }
}

console.log(NoOfItems.myFunctionToAddTwoNumber(5,6));
console.log(NoOfItems.myFunctionToReturnString());
