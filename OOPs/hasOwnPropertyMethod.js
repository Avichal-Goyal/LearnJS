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

    console.log("Name in teacher? ", teacher.hasOwnProperty("name"));
    console.log("ACtive in teacher? ", teacher.hasOwnProperty("active"));// hasOwnProperty MEthod will not check for any property that is present in the prototype of the class but not in the class itself.
    console.log("Active in teacher? ", teacher.active !== undefined);
    console.log("ACtive in teacher by using in? ", "active" in teacher);
    console.log("Name in teacher? ", teacher.taco !== undefined);
    console.log("Name in teacher? ", "name" !== undefined);
    console.log(teacher);
}