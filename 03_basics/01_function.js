
/*function sayMyname(){
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("H");
    console.log("a");
    console.log("l");
}
sayMyname()*/


function addTwoNumber(number1, number2){
  
    //return number1 + number2
}

//const result = addTwoNumber(3, 5)
//console.log("Result:",result);


/*function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name");
        return

    }
    return `${username}just logged in `

}

console.log(loginUserMessage("vishal"));*/


function calculateCartPrice(var1, var2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 500, 200))


const user ={
    username: "vishal",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

