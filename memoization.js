pow.calculated = {};
function pow(x, y){
    let stringVersion = x + "^" + y;
    console.log("string version: " + stringVersion);
    if(stringVersion in pow.calculated){
        console.log("found!");
        return pow.calculated[stringVersion];
    }
    console.log("CALCULATING!");
    let total = 1;
    for(let i = 0; i < y; i++){
        total *= x;
    }
    // pow.calculated.push(total);
    pow.calculated[stringVersion] = total;
    console.log(pow.calculated);
    return total;
}

console.log(pow(3, 3));
console.log(pow(3, 3));
console.log(pow(10, 4));
console.log(pow(10, 3));