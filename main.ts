import inquirer from "inquirer";

let myBalance = 10000;    //DOLLARS
let myPin = 4321;

  let pinAnswer= await inquirer.prompt(
    {

    name:"pin",
    message:"Enter your pin",
    type:"number"

});

if(pinAnswer.pin===myPin) {

    console.log("Correct pin code");

}else
 if (pinAnswer.pin !==myPin ) { 
    
   
 console.log ("Incorrect pin code, please re-enter the pin");
    
  
 process.exit(1);
}
    let operationAns =await inquirer.prompt({

        name:"operation",
        message:"PLEASE select option",
        type:"list",
        choices:["withdraw" , "check balance"]
    });

    
    
    if (operationAns.operation=== "withdraw") {
let amountAnswer= await inquirer.prompt({
      name:"amount",
      message:"ENTER YOUR AMOUNT",
      type:"number"

});


if (amountAnswer.amount <= myBalance) {
    myBalance -= amountAnswer.amount;
    const remainingBalanceMessage = `Your remaining balance is $${myBalance}`;
    console.log(remainingBalanceMessage);

}else if(myBalance !=amountAnswer.amount)   
console.log("Insufficient funds! Withdrawal failed.");


} else if(operationAns.operation==="check balance"){
       console.log("your remaining balance is :" + myBalance);
};

    
    

