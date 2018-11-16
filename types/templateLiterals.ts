const carName = "Subaru";
const carIHave = "I have a " + carName + "car of 2018 model";


//with template literals we can use multi line string easily
const  templateLiteral = `I have a  ${carName} 
    car of 2018 model`;
console.log(templateLiteral);


const double = (value : number) => value * 2;
const greet =  (name : string = "akshay") => {
    console.log("hello" + name);
};

