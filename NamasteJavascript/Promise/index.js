

//  const cart=["chhole- bhature", "masala dosa", "kadai -paneer","butter-roti"]
 const cart="";


function createOrder(cart){
    
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            if(cart)
            {
                console.log("order_id created");
                resolve(142419);
            }
            else
            {
                reject("Invalid cart value")
            }
        },3000)
    }) 
}

function payment(orderID){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            if(orderID)
            {
                console.log("payment completed succesfully..!");
                resolve(142419);
            }
            else
            {
                reject("payment failed....");
            }
        },3000)
    }) 
    
}

function viewOrderDetails(orderID){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
          console.log("order for ",cart," is completed");
        },1000)
    }) 
    
}
    

createOrder(cart)
.then(payment)
.then(viewOrderDetails)
.catch((data)=>{
    console.log("error occured due to ",data);
});