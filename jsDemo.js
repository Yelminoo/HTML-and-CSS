// function closure
function outer(){
    var a=0;
    function inner(){
        alert(a);

    } 
    return inner();
}


var result=outer();
console.log(a);

// function declaration and function expression