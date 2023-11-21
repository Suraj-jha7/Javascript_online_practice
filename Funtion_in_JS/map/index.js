let arr=[1,4,5,3,11,11,23];



function double(element) {
return 2*element
}


let output=arr.map((element)=>
element.toString(2));
// console.log(output);

let ans=arr.map(double);
console.log(ans);





