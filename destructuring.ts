const cars = ["bmw","audi"];
const car1 = cars[0];
const car2 = cars[1];
console.log(car1,car2);

//with destructuring
const bikes = ["harley", "ducati"];
const [bike1,bike2] = bikes;
console.log(bike1,bike2);


//with objects
const car = { model : 2018, color : "white"};
const model = car.model;
const color = car.color;
console.log(model, color);

//objects with destructuring
const bike = { bikeModel : 2018, bikeColor : "white"};
const {bikeModel, bikeColor} = bike;
console.log(bikeModel, bikeColor);

//with alias names
const bike123 = { model : 2018, color : "white"};
const {model : bikeModel1, color :bikeColor1} = bike123;
console.log(bikeModel, bikeColor);

