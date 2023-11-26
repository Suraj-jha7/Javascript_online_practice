/*
1.async function allways return a promise.
2. async and await combo are used to handle promises..
3. await is a keyword which can only be used inside an async function..
4. js engine looks like it wait for promise to be resolved in async await case but it does not , it appears to be waiting.

*/

// async function getData()
// {
//     setTimeout(()=>{
//         return "Namaste "
//     },3000)
    
// }

// const promiseData=getData();

// promiseData
// .then((data)=>{
//     console.log(data);
// })
// console.log(getData());


const p= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve( "hey this is async promise");  
    }, 3000);
    
})


//Below we are using asyc await , in this js engine will wait for completion of promise after that below code will run..
async function handlePromise(){
    console.log("Hello world........");
const val=await p;
console.log("orange javascript...")
console.log(val);
}

console.log("testing .......1");
handlePromise();
console.log("testing .......2");


//Below we are using promise , in this js engine does not wait for completion of promises.
// function getData(){
//     //js engine will not wait for promise to be resolved.
//     p.then((res)=>console.log(res));

//     console.log("Mango javascript")

// }

// console.log("testing .......1");
// getData();
// console.log("testing .......2");