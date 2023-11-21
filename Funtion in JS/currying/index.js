// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// function addition(a,b,c){
//     return a+b+c;
// }


var addition= (a)=>{
    
    return (b)=>{
    
     return  (c)=>{
            return a+b+c;
        }
    }
}


// var sum1= addition(1);
// var sum2=sum1(2);
// var sum3=sum2(3);
// console.log(sum3);

console.log(addition(1)(2)(3));//This is called currying in javascript..

// console.log(addition(1,2,3));