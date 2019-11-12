function first(arg){
    console.log("function first");
    setTimeout( function(){
        console.log("function first + timeOut");
        console.log("Callback function is running");
        arg();
    }, 500);
}

function second(){
    console.log("function second");
}


// second();
first(second);


/***************************/


function first(arg){
    console.log("function first");
    setTimeout( common(arg), 500);
}

function second(){
    console.log("function second");
}

function common(arg){
    console.log("function first + timeOut");
    console.log("Callback function is running");
    arg();
}
// second();
first(second);