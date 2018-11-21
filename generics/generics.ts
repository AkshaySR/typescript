//simple generic of any types
function getData(data :any){
    return data;
}
console.log(getData("data").length);
console.log(getData(5467).length); // which would give undefined on length property

//better way of writing generic
function getBetterData<T>(data: T){
    return data;
}
console.log(getBetterData("data").length);
// console.log(getBetterData(5467).length); // throws complie error
console.log(getBetterData<number>(5467));


//built in generics
const testResults: Array<number> = [2,4,5,6];
testResults.push(3);
// testResults.push("sdf"); //complains about type

//Arrays
function printAll<T>(args: T[]){
    args.forEach((element) => console.log(element));
}
printAll(["qweqw","qweqwe"]);

//generics types
const echo2: <T>(data: T) => T = getBetterData;
console.log(echo2<string>("something"))

function print<T>(args: T[]){
    args.forEach((element) => console.log(element));
}
print(["12","2"]);

//generic class
/*
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue : T;
    calculate(){
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue ="someThing";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());*/

/*class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue : U;
    calculate(){
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string,number>();
simpleMath.baseValue ="someThing";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());*/
