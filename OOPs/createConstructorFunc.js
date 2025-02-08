{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
        console.log(this);
    }

    let me = new User("Avichal", ["sports", "movies", "anime"]);
    let you = new User("Cassy");
    console.log(me, you);
    me.membership = "Platinum";
    console.log(me);
}