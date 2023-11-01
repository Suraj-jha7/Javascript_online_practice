function getCheese(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const cheese="cheesy";
           console.log("here is the cheese",cheese);
            resolve(cheese);
        },2000)
    })
}


function makeDough(cheese)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dough=cheese+"dough";
             console.log("here is the dough",dough);

             resolve(dough);
            // reject("dough is bad");
        }, 2000);
    });
}


function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const pizza= dough+"pizza";
            console.log("here is the pizza", pizza);
            resolve(pizza);
        }, 2000);
    })
}


async function orderPizza(){

    try{
        const cheese= await getCheese();
        const dough= await makeDough(cheese);
        const pizza= await bakePizza(dough);

        console.log("your pizza is here ",pizza);
    }
    catch(err){
        console.log("error occuered",err);
    }

}

orderPizza();