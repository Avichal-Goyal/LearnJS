function pow(x, y){
    let total = 1;
    for(let i=0; i<y; i++){
        total *= x;
    }
    return total;
}

let coolFunc = [pow];// making array of functions like we can make for the objects

console.log("from array: ", coolFunc[0](3, 3));

let mathFunc = {
    power: pow
};

console.log("from object: ", mathFunc.power(3, 3));

pow.description = "will raise numbers to power";
console.log(pow.description);

function callBackExample(callback){
    return callback(3, 5);
}

console.log(callBackExample(pow));

function returnAfunction(){
    return pow;
}

console.log(returnAfunction()(10, 3));