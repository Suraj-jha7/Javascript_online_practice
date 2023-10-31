

var  getData= ()=>{
    
    setTimeout(()=>{
        var output="";

        datas.forEach((data,index)=>{
            output+=data.name+" ";
        })
    
        console.log(output);
    },1000)
   
    
}

var putdata=()=>{

    return new Promise((resolve,reject)=>{



        setTimeout(()=>{
            datas.push({name:"amitabh",profession:"engineer"});
           
        },1000)
        let error=true;
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