const user=[
{
    firstName:"Mohan", lastName:"Lal" ,age:34
},
{
    firstName:"Punit", lastName:"sharma" ,age:4
},
{
    firstName:"Mayank", lastName:"verma" ,age:14
},
{
    firstName:"ragav", lastName:"chaddi" ,age:44
}
]


// const output=user.map((element)=>
// {
//     return element.firstName+" "+element.lastName
// })

// console.log(output);


// const output=user.reduce((acc,curr)=>{

//     if(acc[curr.age])
//     {
//         acc[curr.age]=acc[curr.age]+1;
//     }
//     else
//     {
//         acc[curr.age]=1;
//     }

//     return acc;
// },{})


// console.log(output);


const output=user.filter((e)=>{
    
    if(e.age<30)
    {
        return e.firstName;
    }
}).map((x)=>x.firstName)

console.log(output);