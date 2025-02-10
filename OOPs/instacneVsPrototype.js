{
    let user = {
        active : true,
        sayHello : function(){
            return this.name + " says hi";
        }

    };

    let teacher = {
        name : "Subhash",
        teaching : ["math", "science"]
    };
    let student = {
        name : "Avichal",
        major : "English"
    };

    Object.setPrototypeOf(teacher, user);
    Object.setPrototypeOf(student, user);

    console.log(teacher);
    console.log(user);

    student.active = false;
    console.log(teacher.active);
    console.log(student.active);

    console.log(student.sayHello());
}