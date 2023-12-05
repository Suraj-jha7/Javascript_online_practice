const cardContainer=document.getElementById("card-container");
const form1=document.querySelector(".d-flex");
const input=document.querySelector(".form-control");
const cartContainer=document.querySelector("#cart-container");
const cartButton=document.querySelector(".cartbutton");
var cart=[];
const cartshow=document.querySelector(".cartshow");
const hide=document.querySelector(".hide");
let querydata="";
let flag=false;

function arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }

function addToCart(id)
{
    if(cart.includes(id))
    {
        cart=arrayRemove(cart, id);

    }

    else  {
        cart.push(id);
    }
    console.log(cart);
    cardContainer.innerHTML="";
    fatchData(querydata);

}



form1.addEventListener("submit",function (e){
    cardContainer.innerHTML=``
    e.preventDefault();
    querydata=e.target[1].value;
    fatchData(querydata);
    // console.log("success....",e.target[0].value);
     input.value="";
})


async function fatchData(data)
{
    const response = await fetch(`https://dummyjson.com/products/search?q=${data}`);
    const result= await response.json();
   if(result.products.length==0)
   {
    console.log("this is empty array")
    const heading=`<h2>Please enter valid name</h2>`
    cardContainer.insertAdjacentHTML("beforeend",heading);
    
   }
    /*console.log("this is first result",result);
    */
    productFetch(result.products);
   
}


function productFetch(result)
{
    // console.log("this is result",result);
    result.forEach(element => {
        cardRender(element);
    });
}

function cardRender(result)
{
    // console.log("this is 2nd result",result,);
    const resultBody=`<div class="col"><div class="card" style="width: 18rem; height=400px width=400px">
    <img src="${result.images[0]}" class="card-img-top" alt="..." min-height=220px min-widht=300px>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Buy /</a>
      <button type="button" class="btn btn-info" onClick="addToCart('${result.id}')">${cart.includes((result.id).toString())?"Remove from cart":"Add to cart"}</button>


    </div>
  </div>
  </div>`
        cardContainer.insertAdjacentHTML("beforeend",resultBody);
}




cartButton.addEventListener('click',function(){
  cartContainer.classList.toggle("cartshow");
    flag=true;
    console.log("flag is true888888....");
    fetchCartArray(cart);
    
})


function fetchCartArray(cart)
{
  cartContainer.innerHTML="";
   cart.forEach((id)=>{
    // console.log("id is :--",id);
    getCartData(id);
   })
}

async function getCartData(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const result= await response.json();
    // console.log("cart value is ",result.id);
    cartRender(result);
  }


function cartRender(result)
{
    
    const resultBody=`<div class="col"><div class="card" style="width: 18rem; height=200px width=200px">
    <img src="${result.images[0]}" class="card-img-top" alt="..." min-height=220px min-widht=300px>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  </div>`
         cartContainer.insertAdjacentHTML("beforeend",resultBody);
        // cartContainer.appendChild(resultBody);
}





document.querySelector(".cardContainer").addEventListener('click',function(){

  if(flag)
  {
  cartContainer.classList.toggle("hide");
  console.log("hide class added......")
  flag=false;
  }
  
});




