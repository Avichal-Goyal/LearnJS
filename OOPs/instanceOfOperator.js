{
    function User(){
        this.active = false;
    }
    User.prototype.sayHello = function(){
        return this.name + " says hi";
    };

    function Student(name, major){
        this.name = name;
        this.major = major;
    }
    Student.prototype = new User();

    function Teacher(name, teaching){
        this.name = name;
        this.teaching = teaching;
    }

    Teacher.prototype = new User();

    Teacher.prototype.sayHello = function(){
        return "Teacher says hii";
    }
    let student1 = new Student("AVichal", "Computer Science");
    let teacher1 = new Teacher("Subhash", ["AI", "OOPs"]);
    console.log(student1, teacher1);

    console.log(teacher1 instanceof Teacher);
    console.log(teacher1 instanceof User);

    if(teacher1 instanceof Student){
        console.log("yep");
    }else{
        console.log("nope");
    }

    function doSomething(user){
        if(user instanceof User){
            return 5;
        }
        return -1;
    }
    console.log(doSomething(teacher1));
}