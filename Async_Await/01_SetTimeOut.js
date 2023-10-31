

var  getData= ()=>{
    setTimeout(() => {
        
        var output="";
        datas.forEach((data,index)=>{
            output+=`${data.name}`
        })
        console.log(output);
    }, 3000);
}

var putdata=()=>{
    setTimeout(()=>{datas.push({name:"amitabh",profession:"engineer"})},1000)
}

var datas=[
    {name:"suraj",profession:"software engineer"},
    {name:"mayank",profession:"software engineer"}
]
getData();
putdata();