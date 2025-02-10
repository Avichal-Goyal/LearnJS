{
    let user = {
    active : true
    };

    let teacher = {
        teaching : ["math", "science"]
    };

    Object.setPrototypeOf(teacher, user);

    console.log(teacher);
    console.log(user);

    console.log(teacher.active);
}