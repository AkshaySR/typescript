//Objects
type myDetailsTypes = {name : string, age:number,sex:string,cars: string[],listOfCars : (listOfCars : string[]) => string[]};
let myDetails: myDetailsTypes = {
    name : "James Bond",
    age : 50,
    sex : "male",
    cars : ["porche", "ferrari"],
    listOfCars : function (listOfCars : string[]){
        return this.cars;
    }
};
console.log(myDetails);