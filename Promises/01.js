const ticket=new Promise((resolve,reject)=>{
    const isBoarded=true;

    if(isBoarded)
    {
        resolve("success");
    }
    else
    {
        reject("its rejected......")
    }
})


ticket
.then((data)=>
{

    console.log("client is onboarded it ",data);
})

.catch((data)=>{
    console.log("client does not onboarded",data);
}

)

.finally((data)=>{
    console.log("it will get executed always");
})
