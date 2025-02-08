{
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
    }
    doStuff(5);
    doStuff.call("hello", 5, 10);// first argument is for 'this'
    doStuff.apply("hello", [5, 10]);
    // difference between call and apply is apply will take arguments as an array but conventionaly in call

    let args = [5, 10];
    doStuff.apply("hello", args);
    let me = {name : "Avcihal"};
    let newFunction = doStuff.bind(me, 1, 10);
    // bind does not call the fucntion, it just stores a value in this
    newFunction();

}