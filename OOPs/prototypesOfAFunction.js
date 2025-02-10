{
    let user = {
        active : false,
        sayHello : function(){
            let message =  this.name + " says hi";
            return message;
        }

    };

    let teacher = {
        name : "Subhash",
        teaching : ["math", "science"],
        sayHello : function(){
            let message =  this.name + " teaches ";
            this.teaching.forEach(function(e){
                message += e + " ";
            });
            return message;
        }
    };
    let student = {
        name : "Avichal",
        major : "English"
    };

    Object.setPrototypeOf(teacher, user);
    Object.setPrototypeOf(student, user);

    let newMembers = [teacher, student];
    newMembers.forEach(function(e){
        console.log(e.sayHello());
    });

}

// function doSomething(){
//     return 1+1;
// }

// //doSomething -- object.constructor -- doSomething

// let test = new doSomething();

// if(doSomething.prototype === Object.getPrototypeOf(test)){
//     console.log("match");
// }

function Taco(){
    this.toppings = ["cheese"];
}

Taco.prototype.make = function(){
    console.log("Making a taco...");
}

let myTaco = new Taco();

//all objects from the same constructor will have same prototype as that of the constructor