{
    function User(name, interests){
        this.name = name;
        this.interests = interests;
        // this.outputStuff = function(){
        //     console.log("My name is " + this.name, this.interests);
        // }
    }
    User.prototype.greet = function(){
        console.log("My name is " + this.name, this.interests);
    };
    let me = new User("Avichal", ["sports", "movies", "anime"]);
    let you = new User("Cassy");
    console.log(me, you);

    // me.outputStuff();
    // you.outputStuff();
    me.greet();
}