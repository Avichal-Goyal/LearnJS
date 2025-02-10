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