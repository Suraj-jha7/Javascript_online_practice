
function getData(){

    setTimeout(()=>{
        let output="";

        datas.forEach((data,index)=>{
            output+=data.name+" ";
            
        })
    },1000)

     console.log(output);
}


let datas=[
    {name:"suraj",profession:"engineer"

},
{name:"mayank",profession:"engineer"}
]


getData();