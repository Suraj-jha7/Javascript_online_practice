

var  getData= ()=>{
    
    var output="";

    datas.forEach((data,index)=>{
        output+=data.name;
    })

    console.log(output);
    
}

var putdata=(callback)=>{
    datas.push({name:"amitabh",profession:"engineer"});
    callback();              //getback function


}

var datas=[
    {name:"suraj",profession:"software engineer"},
    {name:"mayank",profession:"software engineer"}
]

putdata(getData);