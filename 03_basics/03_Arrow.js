const user ={
    username :"vishal",
    price :999,

    welcomeMessage:function () {
        console.log(`${this.username} welcome to website`);
        
    }

}
user.welcomeMessage()

const chai = () =>{
    let username =" vishal"
    console.log(this);

}
//chai()

const addTwo = (num1, num2)=>{
    return num1 + num2
}
console.log(addTwo(3,4));