// What is the error in this code?


function getResult(num1,num2,num3){
 console.log(num1-num2+num3)
}
 
getResult(2,3,4,5);   //O/P=3




// No error. Even though an extra parameter (5) is passed, the function 
// getResult simply does not use it.


