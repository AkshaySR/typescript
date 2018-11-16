interface carModel {
    carName: string;
    model ?: number; //optional
    [propertyName: string] :any  //if property name and type is unknown
    carSpecifications(engine :string) :void
}

function carDetails(car: carModel ){
    console.log("car name " + car.carName);
}

const carDetails2 = {
    carName: "subaru",
    model : 2018,
    carSpecifications(engine : "v8") {
        console.log("The car has" + engine + "engine");
    }
};

carDetails(carDetails2);


//interface with class
class completeDetails implements carModel {
    carName : string = "wrx";
    carSpecifications(carName : string) {
        console.log("The car "+ this.carName);
    }
}

const mycarclass = new completeDetails();
mycarclass.carName = "wrx";
mycarclass.carSpecifications(mycarclass.carName);

//function types

interface DoubleValueFunc {
    (number1 :number, number2 :number) :number;
}

let myFunction : DoubleValueFunc;
myFunction = function(value1 : number, value2 :number){
    return (value1 + value2) * 2;
};

//Interface inheritance

interface carSpecs extends completeDetails {
    milesOnCar : number;
}

const bmwCar : carSpecs = {
    milesOnCar : 10000,
    carName : "bmw",
    carSpecifications(carName){
        console.log("The car "+ this.carName);
    }
};

console.log(bmwCar);

