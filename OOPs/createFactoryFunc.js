{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
    }

    function newUser(name, interests){
        let person = {
            name : name,
            interests : interests
        };

        return person;
    }

    let me = new User("Avichal", ["sports", "movies", "anime"]);
    let you = newUser("Cassy", ["eating", "traveling"]);
    console.log(me, you);
    me.membership = "Platinum";
    console.log(me);
}