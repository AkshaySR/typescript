//Block scope
let value  = 123 ;

function resetValue(){
    //console.log(value); throws blockscope error
    let value = 345;
    console.log(value);
}

resetValue();
console.log(value);