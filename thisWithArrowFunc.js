{
    console.log(this);
    let arrow = () => this;
    function normal(){
        return this;
    }

    console.log(arrow());
    console.log(normal());

    console.log("!!!!", this);
    let functions = {
        this : this,
        arrow : arrow,
        normal : normal,
        arrowTest : () => this
    };
    console.log(functions.arrow());
    console.log(functions.normal());
    // for arrow function the value of this keyword is same
    console.log(functions.arrowTest());

    // using bind with arrow function
    let arrows = () => this;
    let newFunc = arrows.bind("hello");
    console.log(newFunc());
    // also bind cannot change the value of this in the arrow function
}