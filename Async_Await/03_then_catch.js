

var  getData= ()=>{
    
    setTimeout(()=>{
        var output="";

        datas.forEach((data,index)=>{
            output+=data.name+" ";
        })
    
        console.log(output);
    },3000)
   
    
}

var putdata=()=>{

    return new Promise((resolve,reject)=>{



        setTimeout(()=>{
            datas.push({name:"amitabh",profession:"engineer"});
           
        },3000)
        let error=false;
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("kuch shi nhi hai...");
        }
        
        
    })
}

var datas=[
    {name:"suraj",profession:"software engineer"},
    {name:"mayank",profession:"software engineer"}
]

putdata()
.then(getData)
.catch(err=>{console.log(err)});


getData();