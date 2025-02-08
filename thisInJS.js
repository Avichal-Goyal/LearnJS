let me = {
    name : "Avcihal",
    outputMe : outputMe //function(){
        //console.log(this);
        //console.log(this.name);
    //}
};
function outputMe(){
    console.log(this);
}
function outputMeStrict(){
    'use strict';
    console.log(this);
}

function Person(){
    console.log(this);
    this.name = "Avichal";
    console.log(this);
}
me.outputMe(); // method
outputMe();
outputMeStrict();
let person = new Person();//cunstructor
console.log(person);
Person();
