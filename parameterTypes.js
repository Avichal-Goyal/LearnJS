function pow(x, y = 2, ...extra){
    console.log(this);// implicit parameters
    console.log(arguments);// implicit parameters
    console.log(extra);// rest parameters, this extra works as an actual array
    // if(y == undefined){
    //     y = 2;
    // }same done by default parameter

    // y = typeof y === "undefined" ? 2 : y;
    let total = 1;
    for(let i=0; i<y; i++){
        total *= x;
    }
    return total;
}

function largest(x, ...extra){
    let largest = x;
    for(let i=0; i<extra.length; i++){
        if(extra[i] > largest){
            largest = extra[i];
        }
    }
    return largest;
}

console.log(pow());
console.log(pow(4, 2, 4, 5, 6, 7));// frist two numbers are considered as arguments
console.log(pow(2));
console.log("largest: ", largest(3, 20, 4, 28, 7));


