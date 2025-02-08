try{
    doesNotExist;
}catch(e){
    console.log(e);
}finally{
    console.log("test");
}
console.log("after");

function doSomething(){
    throw { error : "Tis broke", code : -1};
}

try{
    doSomething();
}catch(e){
    console.log(e);
    console.log("Error");
}finally{
    console.log("Making my own error func");
}

throw new Error();// this also a declaration