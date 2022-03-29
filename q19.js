// Question-19
// Write a function named multiplesOfNumbers which takes an argument as limit,
// and runs a loop from o to that limit and prints the multiples of 3 and 5. 
// Like the below.

// Input:

// 10

// 3 and 5 multiples => 3, 5, 6, 9, 10

// Output :

// 33


// function multiplesOfNumbers(limit){
//     for(var i=1;i<=limit;i++){
//         if(i%3==0){
//             console.log(i)
//         }
//         else if(i%5==0){
//             console.log(i)
//         }
//     }

// }
// multiplesOfNumbers(10)



function multiplesOfNumbers(limit){
    var sum=0
    for(i=0;i<=limit;i++){
        if(i%3 ===0){
            sum+=i;
        }
        if(i%5 ==0){
            sum+=i;
        }
    }
    console.log(sum);
 }
 multiplesOfNumbers(10);
 