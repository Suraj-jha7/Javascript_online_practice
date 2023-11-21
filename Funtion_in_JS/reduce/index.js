let arr=[2,1,44,11,45,1,44,13,412];

// Triditional way of finding sum of array

var ans=function sum(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }

    return sum;

}
console.log(ans(arr));


// reduce function for finding sum of array...........................................................................................

var output= arr.reduce((acc,cur)=>{
   return acc+=cur;
    
},0)

console.log(output);


// reduce function for finding maximum value in an array...............................................................................
var max= arr.reduce((arr,curr)=>{
    if(curr>arr)
    {
        arr=curr;
    }
    return arr;
},arr[0])

console.log(max);