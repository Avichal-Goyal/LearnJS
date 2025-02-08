{
    function cube(x){
        return x*x*x;
    }
    let cubeArrow = x => {
        console.log("calculating...");
        return x*x*x;
    }
    console.log(cube(5));
    console.log(cubeArrow(5));
    let product = (x, y) => x*y;
    console.log(product(4, 3));
}