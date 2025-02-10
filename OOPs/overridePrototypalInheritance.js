{
    let user = {
    active : true
    };

    let teacher = {
        teaching : ["math", "science"]
    };
    let student = {
        major : "English"
    };

    Object.setPrototypeOf(teacher, user);
    Object.setPrototypeOf(student, user);

    console.log(teacher);
    console.log(user);

    student.active = false;// it will mask the original prototype of user, but will not effect the root prototype
    console.log(teacher.active);
    console.log(student.active);
}