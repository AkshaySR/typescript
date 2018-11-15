//Nullable types
let valueCanBeNUll = 12;
//valueCanBeNUll = null; //will throw error
//valueCanBeNUll = null; // can also accept it if  strictNullChecks : false in tsconfig.json file


let valueCanBeNUllAlso;
valueCanBeNUllAlso = null;

let valueCanBeNUllWithUnionType : number | null = 12;
valueCanBeNUllWithUnionType = null;