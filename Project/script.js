const cardContainer=document.getElementById("card-container");
const form1=document.querySelector(".d-flex");
const input=document.querySelector(".form-control");

console.log("hello");
form1.addEventListener("submit",function (e){
    cardContainer.innerHTML=``
    e.preventDefault();
    fatchData(e.target[0].value);
    console.log("success....",e.target[0].value);
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
    console.log("this is first result",result);
    productFetch(result.products);
}

function productFetch(result)
{
    console.log("this is result",result);
    result.forEach(element => {
        cardRender(element);
    });
}

function cardRender(result)
{
    console.log("this is 2nd result",result,);
    const resultBody=`<div class="card" style="width: 18rem; height=400px width=400px">
    <img src="${result.images[0]}" class="card-img-top" alt="..." min-height=220px min-widht=300px>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Buy /Add to cart</a>
    </div>
  </div>`
        cardContainer.insertAdjacentHTML("beforeend",resultBody);


}


